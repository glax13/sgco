# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite (artifacts/sean-gibson)
- **Routing**: Wouter
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **Animation**: Framer Motion

## Artifacts

### sean-gibson (react-vite, preview path: /)
Sean Gibson personal brand site. Five pages: Home, About, HPOS, Speaking, Contact.
- Brand: dark navy (#07111a), cream (#EAE4D6), green (#2EB872)
- Fonts: Inter + DM Serif Display (Google Fonts)
- Contact form stores submissions to PostgreSQL
- Newsletter signup stores emails to PostgreSQL
- SEO: react-helmet-async, JSON-LD Person schema, robots.txt, sitemap.xml

### api-server (Express 5, preview path: /api)
Shared backend for all artifacts.
- POST /api/contact — contact form submissions
- POST /api/newsletter — newsletter signups
- GET /api/healthz — health check

## Database Tables

- `contact_submissions` — name, email, type (advisory/speaking/general), subject, message
- `newsletter_subscribers` — email, name, active

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/sean-gibson run dev` — run frontend locally

## Outstanding Tasks (from brief)

- [ ] Replace hero headshot placeholder with real photo (3:4 ratio)
- [ ] Replace GovNet conference panel photo (About page)
- [ ] Replace World Lacrosse 2023 Snapdragon Stadium photo (HPOS + Speaking)
- [ ] Confirm and update domain outbound URLs (ardoq.com, irelandlacrosse.ie, glenviewsports.com)
- [ ] Review and personalise origin story paragraph
- [ ] Consider adding writing/ideas section linking to Substack
- [ ] Update sitemap.xml domain from seangibson.co once custom domain is live

## Editorial Rules

- No em dashes in prose
- British/Canadian spelling (organisation, programme, behaviour)
- Short sentences as default
- No hedging, filler openers, adjective stacking, or triple verb stacking

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
