# Technical Context: LEGEND INDUSTRIES Website

## Technology Stack

| Technology   | Version | Purpose |
| ------------ | ------- | ------- |
| Astro        | 5.x     | Static site framework |
| TypeScript   | 5.9.x   | Type-safe JavaScript |
| Tailwind CSS | 4.x     | Utility-first styling |
| Vitest       | 4.x     | Unit testing |
| Node/npm     | Current | Package manager/runtime |

## Development Commands

```bash
npm install         # Install dependencies
npm run dev         # Start Astro dev server
npm run build       # Production static build
npm run preview     # Preview production build
npm run typecheck   # TypeScript type checking
npm run test        # Run tests
npm run lint        # Run ESLint
```

## Project Configuration

### TypeScript (`tsconfig.json`)
- Extends `astro/tsconfigs/strict`
- Path alias: `@/*` → `src/*`
- No React JSX configuration

### Testing (`vitest.config.ts`)
- Node test environment
- Test include pattern: `src/**/*.{test,spec}.ts`
- Coverage focused on `src/data` and `src/utils`

### Linting (`eslint.config.mjs`)
- Flat ESLint config
- Ignore paths: `node_modules/**`, `dist/**`, `.astro/**`

## Deployment Configuration

- Cloudflare-compatible headers file: `public/_headers`
- No `vercel.json` in repository
- Static build output directory: `dist/` (ignored in git)

## Build Status (as of 2026-03-28)

- ⚠️ `npm run typecheck` blocked in this environment (registry access returned HTTP 403 during install)
- ⚠️ `npm run test` blocked in this environment (tooling unavailable without install)
- ⚠️ `npm run build` blocked in this environment (tooling unavailable without install)
