# Active Context: LEGEND INDUSTRIES Website

## Current State

**Project Status**: ✅ Astro static site cleanup complete after migration stabilization.

The repository has been cleaned of leftover Next.js/React artifacts. The Astro + TypeScript + Tailwind stack is now consistent, and deployment config is Cloudflare-only.

## Recently Completed (2026-03-29)

- Optimized Capabilities page hero section: removed radial gradient layers, removed `backdrop-blur-sm` from stat cards, shortened body copy from 75 to ~34 words (55% reduction), kept all 4 stat cards in a `grid-cols-2 sm:grid-cols-4` layout for mobile-first rendering.
- Fixed broken DOM nesting in "Where It Fits" / "Use Cases" section — missing `</div>` closing tag for `lg:col-span-2` wrapper was causing grid misalignment.
- Assigned unique semantic icons to Customization Layer cards on Capabilities page: `paintbrush` (Logo Printing), `fileText` (Size & Dimensions), `cog` (Material Selection), `palette` (Color Combinations), `gift` (Packaging & Finishing). Added `icon` field to `CUSTOMIZATION_OPTIONS` data in `site.ts`.

## Recently Completed (2026-03-28)

- Configured Cloudflare Pages build settings: `SKIP_DEPENDENCY_INSTALL=true`, `BUN_VERSION=1.3.11`, build command `bun install && bun run build`.
- Documented that `bun.lockb` (binary) is deprecated in Bun 1.3.x — `bun.lock` (text) is the standard.
- Removed unused `@astrojs/tailwind` dependency (Tailwind v4 works via `@tailwindcss/postcss` + PostCSS config).
- Standardized package manager to Bun (removed npm references from memory bank docs).
- Updated `tech.md` and `context.md` to use `bun` commands consistently.
- Removed legacy React component sources (`.tsx`) that were no longer referenced by Astro pages/components.
- Removed legacy React/Vite test setup tied to removed components.
- Removed orphaned React helper modules (`src/lib/render-icon.tsx`, `src/lib/links.ts`).
- Updated `tsconfig.json` to Astro-native TypeScript settings (removed React JSX options).
- Removed tracked build output (`dist/`) and added `/dist` to `.gitignore`.
- Removed `vercel.json`; retained Cloudflare-compatible `public/_headers`.
- Updated Vitest config to non-React test environment and Astro-relevant include/coverage paths.
- Updated existing data tests to reflect current site data and removed icon tests dependent on deleted React helpers.
- Simplified ESLint config to remove Next.js-specific preset dependency.

## Verification Status

| Check | Status |
|-------|--------|
| `bun run typecheck` | ✅ Passed |
| `bun run lint` | ✅ Passed |
| `bun run build` | ✅ Passed (19 pages, Tailwind v4.1.17 via PostCSS) |

## Current Deployment Direction

- Static output generated via Astro (`dist/`)
- Cloudflare Pages with Bun build tooling (env vars: `SKIP_DEPENDENCY_INSTALL=true`, `BUN_VERSION=1.3.11`)
- Build command: `bun install && bun run build`
- Runtime: Node.js (Cloudflare default) — Bun used only for install + build orchestration
- Cloudflare-compatible headers file at `public/_headers`
- No Vercel config file in repo

## Session History

| Date | Changes |
|------|---------|
| 2026-03-29 | Capabilities hero optimization: removed radial gradients + backdrop-blur, shortened copy 55%, kept 4 stat cards in 2-col mobile grid; fixed broken DOM in Use Cases section (missing </div>) |
| 2026-03-29 | Capabilities page: assigned unique semantic icons to each Customization Layer card (paintbrush, fileText, cog, palette, gift) instead of repeated generic icon |
| 2026-03-28 | Cloudflare Pages build config: set Bun as build tool via env vars (`SKIP_DEPENDENCY_INSTALL`, `BUN_VERSION`), documented `bun.lock` vs `bun.lockb` status |
| 2026-03-28 | Dependency cleanup: removed unused `@astrojs/tailwind`, standardized package manager to Bun, updated memory bank docs |
| 2026-03-28 | Follow-up hardening: added non-React tests for `src/utils/links.ts` and icon coverage against `Icons.astro`; updated source validator script to remove stale render-icon/Tailwind integration assumptions |
| 2026-03-28 | Cleanup/stabilization pass: removed React leftovers, fixed TypeScript/Vitest config, removed tracked dist, Cloudflare-only deployment config |
| 2026-03-28 | Full Next.js → Astro migration with zero functional deviation |
| 2026-03-28 | Fixed build issues: Tailwind CSS v4 config, Icons component rewrite |
