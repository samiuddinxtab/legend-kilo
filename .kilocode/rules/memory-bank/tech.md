# Technical Context: LEGEND INDUSTRIES Website

## Technology Stack

| Technology   | Version | Purpose |
| ------------ | ------- | ------- |
| Astro        | 5.x     | Static site framework |
| TypeScript   | 5.9.x   | Type-safe JavaScript |
| Tailwind CSS | 4.x     | Utility-first styling |
| Vitest       | 4.x     | Unit testing |
| Bun          | Current | Package manager/runtime |

## Development Commands

```bash
bun install         # Install dependencies
bun dev             # Start Astro dev server
bun run build       # Production static build
bun run preview     # Preview production build
bun run typecheck   # TypeScript type checking
bun run test        # Run tests
bun run lint        # Run ESLint
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

### Cloudflare Pages

- **Platform**: Cloudflare Pages (static hosting)
- **Runtime**: Node.js (Cloudflare default — Bun used only for build)
- **Build tool**: Bun (install + build orchestration)
- **Lockfile**: `bun.lock` (text format, Bun 1.3.x standard)

#### Cloudflare Pages Build Settings

| Setting | Value |
|---------|-------|
| Build command | `bun install && bun run build` |
| Output directory | `dist` |
| Framework preset | Astro (or None) |

#### Required Environment Variables

| Variable | Value | Purpose |
|----------|-------|---------|
| `SKIP_DEPENDENCY_INSTALL` | `true` | Prevents Cloudflare from auto-installing with npm/yarn |
| `BUN_VERSION` | `1.3.11` | Ensures correct Bun version on Cloudflare build workers |

> **Note**: Cloudflare Pages does not auto-detect `bun.lock` (text format). The environment variables above are required to explicitly configure Bun usage. The `bun.lockb` (binary) format is deprecated in Bun 1.3.x and cannot be generated.

#### How It Works

1. `SKIP_DEPENDENCY_INSTALL=true` — skips Cloudflare's default npm/yarn install
2. `BUN_VERSION=1.3.11` — installs specified Bun version on build worker
3. `bun install` — installs dependencies using `bun.lock` (faster than npm)
4. `bun run build` — runs `astro build` via Bun orchestration (Node.js runtime)

### Other

- Cloudflare-compatible headers file: `public/_headers`
- No `vercel.json` in repository
- Static build output directory: `dist/` (ignored in git)

## Build Status (as of 2026-03-28)

- ✅ `bun run typecheck` passed
- ✅ `bun run lint` passed
- ✅ `bun run build` passed (19 pages, Tailwind v4.1.17 via PostCSS)
