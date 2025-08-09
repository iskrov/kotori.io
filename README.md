# Kotori Website

Calm, privacy-first marketing site for Kotori — a hands‑free voice journaling app. Built with React, TypeScript, Tailwind, and Vite. Deployed to Google Cloud Run.

## Stack
- React + TypeScript (Vite)
- Tailwind CSS (CDN mode)
- Docker + Nginx for production
- Google Cloud Build + Cloud Run (CI/CD)

## Project Structure
```
components/         # UI sections (Hero, Features, HowItFeels, CallToAction, FAQ, Header, Footer)
src/                # App bootstrap
public/             # Runtime assets (logos, og image, site-config.json, sitemap.xml, robots.txt)
site-config.json    # Source-of-truth content & branding (mirrored to public/site-config.json by edits)
index.html          # Meta tags, Tailwind config, entry
scripts/            # Dev & deployment tooling
```

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deployment (Cloud Run)
```bash
# one-time setup (interactive)
./scripts/setup-project.sh

# deploy using Cloud Build -> Cloud Run
./scripts/cloud-deploy.sh kotori-io
```
- Configuration is read from `deployment-config.env` (project id, region, service name, resources).
- The container serves the static Vite build via Nginx.

## Content Management
All copy, features, colors and links live in `public/site-config.json`. The app reads this at runtime via the `useSiteConfig` hook. You can safely edit this file and redeploy without touching code.

Key sections:
- `site.title`, `site.description`, `seo.keywords`
- `hero` (headline, subheadline, CTAs, hero image)
- `features`, `howItFeels`, `callToAction`, `faq`, `footer`

## SEO
- Titles & descriptions: set in `index.html` and `public/site-config.json`
- Canonical + sitemap: `index.html` links to `/sitemap.xml`; see `public/sitemap.xml`
- Robots: `public/robots.txt` allows global crawling and points to sitemap
- Open Graph/Twitter: meta tags in `index.html` (wire `og:image`/`twitter:image` to `public/assets/og.jpg` when ready)
- Accessibility: semantic `<nav>`, `<main>`, `<footer>` in components; single `h1` in `Hero.tsx`; descriptive alt text
- Performance: preconnect to Google Fonts, Vite-optimized assets

## Dark Mode
Supports light/dark with a toggle in the header. Colors and backgrounds are tuned for low-stimulation viewing.

## Scripts
- `./scripts/cloud-deploy.sh <gcp-project>`: Builds and deploys using Google Cloud Build, then rolls out Cloud Run
- `./scripts/deploy.sh`: Local Docker deployment
- `./scripts/check-config.sh`: Validates deployment settings
- `./scripts/doctor.sh`: Environment sanity checks
- `./scripts/dev-container.sh`: Run container locally with port mapping

## Updating Copy & Assets
1. Edit `public/site-config.json` for text and section order
2. Replace images under `public/images/` and `public/assets/`
3. Run `npm run build` and deploy (`./scripts/cloud-deploy.sh kotori-io`)

## Security
- No secrets in repo; `.env.local` is ignored
- Public marketing site served as static assets via Nginx

## Roadmap (optional)
- Add JSON‑LD (WebSite, Organization, FAQPage)
- Add `og:image` and `twitter:image`
- Add integration tests for links and metadata

---
Questions or issues: hello@kotori.io 