# Personal Portfolio — Cormac Greaney

A modern, premium personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Optimized for deployment on [Cloudflare Pages](https://pages.cloudflare.com/) at [cormacgreaney.com](https://cormacgreaney.com).

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- Static export for fast CDN delivery on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Customize

Edit `src/lib/site-config.ts` to update your name, bio, projects, skills, and social links.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/), go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select your repository and configure the build:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy. Cloudflare will rebuild on every push to your production branch.
5. Add your custom domain **cormacgreaney.com** under **Custom domains** in the Pages project settings.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build static export      |
| `npm run lint`  | Run ESLint               |

## Project structure

```
src/
├── app/              # App Router pages and layout
├── components/
│   ├── layout/       # Header, Footer, Background
│   ├── sections/     # Hero, About, Projects, Contact
│   └── ui/           # Reusable UI components
└── lib/              # Site config, motion presets, utilities
```
