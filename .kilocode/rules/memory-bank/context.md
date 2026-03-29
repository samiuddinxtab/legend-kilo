# Active Context: LEGEND INDUSTRIES Website

## Current State

**Project Status**: ✅ Astro static site cleanup complete after migration stabilization.

The repository has been cleaned of leftover Next.js/React artifacts. The Astro + TypeScript + Tailwind stack is now consistent, and deployment config is Cloudflare-only.

## Recently Completed (2026-03-29)

- Color token enforcement: replaced all `text-brand-400` on dark backgrounds (`bg-neutral-900`) with `text-brand-300` (index, capabilities, process, company, blog, Footer). Added `--color-wa-green-active: #1a9e52` to global.css. Removed all Tailwind green utilities (`bg-green-*`, `text-green-*`, `border-green-*`) from capabilities.astro (eco bag tone) and contact.astro (WhatsApp info card) — replaced with `var(--color-wa-green)`/`var(--color-wa-green-hover)`/`var(--color-wa-green-active)` CSS variable tokens. Fixed InquiryWidget chip hover state from `hover:border-brand-400 hover:text-brand-600` to `hover:border-brand-500 hover:text-brand-500`. Replaced all `hover:text-brand-400` in Footer.astro with `hover:text-brand-300`.
- Comprehensive color audit: Consolidated WhatsApp green across all components — WhatsAppButton.astro and global.css `btn-whatsapp` now use `var(--color-wa-green)` and `var(--color-wa-green-hover)` CSS variables. Added `btn-outline-dark` component in global.css for secondary CTAs on dark backgrounds (index, process, company, capabilities CTA sections) — fixed WCAG contrast issue where `btn-outline` on dark backgrounds had poor white border visibility. Removed `backdrop-blur-sm` from Header.astro (GPU-heavy, unnecessary). Restored missing WhatsApp and Call CTAs in contact.astro hero that were accidentally removed during Tailwind migration. Fixed invalid `border-neutral-200/70` in capabilities.astro to `border-neutral-300`.
- Aligned contact.astro and InquiryWidget.astro to design system: removed scoped `<style>` blocks entirely (contact had 405 lines of custom CSS), replaced all hardcoded hex colors with Tailwind design tokens (neutral-900, brand-500, etc.), normalized spacing to Tailwind scale, replaced media queries with `sm:`/`lg:` prefixes, removed `font-family: 'Syne'` references. Added `--color-wa-green` and `--color-wa-green-hover` CSS variables to global.css as single-source-of-truth for WhatsApp brand color.
- Rewrote InquiryWidget: WhatsApp-first lead capture architecture. Removed all `required` attributes, `pointer-events-none`, and `opacity-50` gating. Intent pills (Bulk Order/Custom Design/Sample Request) modify pre-fill message. Optional Name/Phone form fields. Collapsible "More details" section. Trust signals. All tap targets ≥44px. Phone input uses `inputmode="tel"`.
- Optimized Capabilities page hero: removed radial gradients, removed `backdrop-blur-sm`, shortened copy 55%.
- Fixed broken DOM nesting in "Where It Fits" section — missing `</div>` in grid wrapper.

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
| 2026-03-29 | Color token enforcement: brand-400→brand-300 on dark bg, green-*→wa-green CSS vars, chip hover states normalized, added --color-wa-green-active to global.css |
| 2026-03-29 | Color audit: consolidated wa-green CSS variable, added btn-outline-dark for dark section CTAs, removed Header backdrop-blur, restored missing contact hero CTAs, fixed invalid border class in capabilities |
| 2026-03-29 | Aligned contact.astro and InquiryWidget.astro to design system: removed scoped <style> blocks, replaced hardcoded hex with Tailwind tokens, added wa-green CSS variables to global.css |
| 2026-03-29 | Capabilities page: assigned unique semantic icons to each Customization Layer card (paintbrush, fileText, cog, palette, gift) instead of repeated generic icon |
| 2026-03-28 | Cloudflare Pages build config: set Bun as build tool via env vars (`SKIP_DEPENDENCY_INSTALL`, `BUN_VERSION`), documented `bun.lock` vs `bun.lockb` status |
| 2026-03-28 | Dependency cleanup: removed unused `@astrojs/tailwind`, standardized package manager to Bun, updated memory bank docs |
| 2026-03-28 | Follow-up hardening: added non-React tests for `src/utils/links.ts` and icon coverage against `Icons.astro`; updated source validator script to remove stale render-icon/Tailwind integration assumptions |
| 2026-03-28 | Cleanup/stabilization pass: removed React leftovers, fixed TypeScript/Vitest config, removed tracked dist, Cloudflare-only deployment config |
| 2026-03-28 | Full Next.js → Astro migration with zero functional deviation |
| 2026-03-28 | Fixed build issues: Tailwind CSS v4 config, Icons component rewrite |
