const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Helper function to get the latest version
async function getLatestVersion(manager, packageName) {
  let metadataUrl;

  if (manager === 'npm') {
    metadataUrl = `https://registry.npmjs.org/${packageName}`;
  } else if (manager === 'yarn') {
    metadataUrl = `https://registry.yarnpkg.com/${packageName}`;
  } else if (manager === 'pnpm') {
    metadataUrl = `https://registry.npmjs.org/${packageName}`; // Skypack does not expose metadata like npm, so fallback to npm registry
  } else {
    throw new Error('Invalid package manager specified.');
  }

  try {
    const response = await axios.get(metadataUrl);
    return response.data['dist-tags'].latest;
  } catch (error) {
    throw new Error('Error fetching the latest version.');
  }
}

// Route to handle fetching the script
app.get('/:manager/:packageName/@:version/:filename(*)', async (req, res) => {
  const { manager, packageName, version, filename } = req.params;
  let resolvedVersion = version;
  let url;

  try {
    // If 'latest' is specified, fetch the latest version
    if (version === 'latest') {
      resolvedVersion = await getLatestVersion(manager, packageName);
    } else if (!version.startsWith('@')) {
      // Ensure the version starts with '@' if it's not 'latest'
      resolvedVersion = `@${resolvedVersion}`;
    }

    // Determine the CDN based on the package manager
    if (manager === 'npm') {
      url = `https://unpkg.com/${packageName}${resolvedVersion ? `${resolvedVersion}` : ''}/${filename}`;
    } else if (manager === 'yarn') {
      url = `https://cdnjs.cloudflare.com/ajax/libs/${packageName}/${resolvedVersion}/${filename}`;
    } else if (manager === 'pnpm') {
      url = `https://cdn.skypack.dev/${packageName}${resolvedVersion ? `${resolvedVersion}` : ''}/${filename}`;
    } else {
      return res.status(400).send('Invalid package manager specified.');
    }

    const response = await axios.get(url, { responseType: 'stream' });
    res.setHeader('Content-Type', 'application/javascript');
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the script.');
  }
});

// Route to provide usage instructions
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to AnyScriptCDN</h1>
    <p>Use this CDN to fetch JavaScript or CSS files from popular package managers like npm, yarn, and pnpm.</p>
    <h2>Usage Instructions</h2>
    <ul>
      <li><strong>NPM:</strong> <code>/npm/:packageName/@:version/:filename</code></li>
      <li><strong>Yarn:</strong> <code>/yarn/:packageName/@:version/:filename</code></li>
      <li><strong>PNPM:</strong> <code>/pnpm/:packageName/@:version/:filename</code></li>
    </ul>
    <h3>Examples:</h3>
    <ul>
      <li>Fetch the latest version of React from Yarn: <code>/yarn/react/@latest/umd/react.production.min.js</code></li>
      <li>Fetch a specific version of Tailwind CSS from NPM: <code>/npm/tailwindcss/@2.2.19/dist/tailwind.min.css</code></li>
      <li>Fetch the latest version of Axios from PNPM: <code>/pnpm/axios/@latest/dist/axios.js</code></li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
