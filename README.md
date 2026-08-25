# Studio EXPLODER

Marketing site for Studio EXPLODER, built as a small React app (Vite).

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (includes npm)

## Getting started

Install dependencies:

```bash
npm install
```

Start the local dev server (with hot reload):

```bash
npm run dev
```

Then open the URL Vite prints (typically http://localhost:5173).

## Building for production

```bash
npm run build
```

This outputs a static, deployable site to `dist/`. To sanity-check the production build locally:

```bash
npm run preview
```

## Project structure

```
index.html              Vite entry HTML (mounts the app into #root)
public/assets/           Static images/logos, served as-is (referenced as /assets/...)
src/
  main.jsx               React entry point
  App.jsx                Top-level layout, owns the logo-invert state
  components/            One component per section of the page
  styles/                One stylesheet per component, plus index.css/App.css for global/layout styles
```

Each component in `src/components/` imports its own stylesheet from `src/styles/`, so styling for
a section lives next to (and is easy to find from) the component that uses it.

## Deployment

This repo is a GitHub Pages user site (`chrisgitgot.github.io`), so the built app needs to end up
published, not just the source. `.github/workflows/deploy.yml` builds the app and publishes `dist/`
to GitHub Pages automatically on every push to `main`.

One-time setup: in the repo's GitHub Settings → Pages, set **Source** to **GitHub Actions**. After
that, pushing to `main` builds and deploys the site — no manual build/commit of `dist/` is needed.
