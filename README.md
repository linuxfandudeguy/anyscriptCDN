
<img src="/assets/logo.svg" alt="Logo" class="">

# AnyScriptCDN

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/linuxfandudeguy/anyscriptCDN)
[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/linuxfandudeguy/anyscriptCDN)
[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/linuxfandudeguy/anyscriptCDN)
[![Run on Cyclic](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/official/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/linuxfandudeguy/anyscriptCDN)
[![Deploy to Cloudflare](https://raw.githubusercontent.com/z1g-project/terbium/main/static/resources/cflogo.png)](https://github.com/linuxfandudeguy/anyscriptCDN/wiki/Deploy-to-Cloudflare-Pages)
[![Run on Glitch](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/official/glitch.svg)](https://glitch.com/edit/#!/import/github/linuxfandudeguy/anyscriptCDN)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/linuxfandudeguy/anyscriptCDN&branch=main&name=anyscriptCDN)

## Overview

**AnyScriptCDN** is a minimalistic, efficient content delivery network designed to fetch and serve JavaScript and CSS libraries directly from npm, Yarn, and pnpm registries. The CDN provides a simple way to include your favorite libraries in web projects without relying on heavy or outdated CDNs like jsDelivr.

## Features

- **Multi-Registry Support:** Fetch scripts from npm, Yarn, and pnpm.
- **Custom URL Structure:** Simple and intuitive URL format for including libraries.
- **Latest Version Support:** Automatically fetch the latest version of any library.
- **Multiple Deployment Options:** Easily deploy on Vercel, Netlify, Replit, Cyclic, Cloudflare Pages, Glitch, or Koyeb.

## Getting Started

To use AnyScriptCDN, you can include scripts and styles in your HTML by referencing the following URL patterns:

### Example URLs

- **Yarn:** `/yarn/react/@latest/umd/react.production.min.js`
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

You can deploy your own instance of AnyScriptCDN using one of the following services:

- [Vercel](https://vercel.com/new/git/external?repository-url=https://github.com/linuxfandudeguy/anyscriptCDN)
- [Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/linuxfandudeguy/anyscriptCDN)
- [Replit](https://replit.com/github/linuxfandudeguy/anyscriptCDN)
- [Cyclic](https://app.cyclic.sh/api/app/deploy/linuxfandudeguy/anyscriptCDN)
- [Cloudflare Pages](https://github.com/linuxfandudeguy/anyscriptCDN/wiki/Deploy-to-Cloudflare-Pages)
- [Glitch](https://glitch.com/edit/#!/import/github/linuxfandudeguy/anyscriptCDN)
- [Koyeb](https://app.koyeb.com/deploy?type=git&repository=github.com/linuxfandudeguy/anyscriptCDN&branch=main&name=anyscriptCDN)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Note: The example URLs and the base URL may need to be updated according to your deployment setup.*
