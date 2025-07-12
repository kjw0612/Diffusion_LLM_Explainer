# Diffusion LLM Explainer

This project publishes the interactive `Explainer` component to GitHub Pages using Vite.

The Vite configuration automatically sets the correct base path when running in
GitHub Actions so the site works when served from a repository page.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site will be generated in the `dist` directory.

## Deployment

A GitHub Actions workflow automatically builds the site and deploys the contents of `dist` to GitHub Pages whenever changes are pushed to the `work` branch.

Enable GitHub Pages for this repository and select **GitHub Actions** as the source.

Once deployed, the page will be available at:

```
https://<your-github-username>.github.io/<repository-name>/
```
