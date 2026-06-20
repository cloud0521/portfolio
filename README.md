# Cloyd Argando Portfolio

Personal portfolio for Cloyd D. Argando, built with Next.js, TypeScript, Tailwind CSS, and static export for GitHub Pages.

Live site:

```text
https://cloud0521.github.io/portpolio/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## GitHub Pages Build

The workflow in `.github/workflows/deploy.yml` builds the static export with:

```bash
NEXT_PUBLIC_BASE_PATH=/portpolio npm run build
```

and deploys the generated `out` folder to GitHub Pages.
