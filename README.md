
<img src="/assets/logo.svg" alt="Logo" class="">

# AnyScriptCDN

[![Deploy](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/linuxfandudeguy/anyscriptCDN)

## Overview

**AnyScriptCDN** is a minimalistic, efficient content delivery network designed to fetch and serve JavaScript and CSS libraries directly from npm, yarn, and pnpm registries. The CDN provides a simple way to include your favorite libraries in web projects without relying on heavy or outdated CDNs like jsDelivr.

## Features

- **Multi-Registry Support:** Fetch scripts from npm, yarn, and pnpm.
- **Custom URL Structure:** Simple and intuitive URL format for including libraries.
- **Latest Version Support:** Automatically fetch the latest version of any library.
- **Vercel Integration:** Easily deploy your own instance with Vercel.

## Getting Started

To use AnyScriptCDN, you can include scripts and styles in your HTML by referencing the following URL patterns:

### Example URLs

- **yarn:** `/yarn/react/@latest/umd/react.production.min.js`
- **npm:** `/npm/tailwindcss/@2.2.19/dist/tailwind.min.css`
- **pnpm:** `/pnpm/axios/@latest/dist/axios.js`

### Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnyScriptCDN Example</title>
    <!-- Include React via Yarn -->
    <script src="https://anyscript-cdn.vercel.app/yarn/react/@latest/umd/react.production.min.js"></script>
    <!-- Include Tailwind CSS via npm -->
    <link href="https://anyscript-cdn.vercel.app/npm/tailwindcss/@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <!-- Include Axios via pnpm -->
    <script src="https://anyscript-cdn.vercel.app/pnpm/axios/@latest/dist/axios.js"></script>
</head>
<body>
    <h1>Welcome to AnyScriptCDN</h1>
</body>
</html>
```

## Deploying Your Own Instance

You can deploy your own instance of AnyScriptCDN using Vercel. Click the button below to get started:

[![Deploy](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/linuxfandudeguy/anyscriptCDN)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Note: The example URLs and the base URL may need to be updated according to your deployment setup.*
