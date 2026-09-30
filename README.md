# John Mark Obura — Engineering Portfolio

Production-ready React + Vite portfolio scaffold for GitHub Pages.

## Stack

- React 19
- Vite 8
- CSS Modules + one global token/reset stylesheet
- Native HTML `<dialog>` for accessible project details
- GitHub Actions for primary deployment
- `gh-pages` package as an optional manual deployment fallback

The site intentionally avoids a router and large animation
libraries.

That keeps the bundle small and avoids GitHub Pages SPA
fallback/404 complexity while still providing rich project-detail
modals.

## Requirements

Use Node.js 20.19+ or 22.12+.

```bash
node --version
npm --version
