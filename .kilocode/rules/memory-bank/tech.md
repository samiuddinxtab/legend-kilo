# Technical Context: LEGEND INDUSTRIES Website

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 16.x    | React framework with App Router |
| React        | 19.x    | UI library                      |
| TypeScript   | 5.9.x   | Type-safe JavaScript            |
| Tailwind CSS | 4.x     | Utility-first CSS               |
| Bun          | Latest  | Package manager & runtime       |

## Development Commands

```bash
bun install        # Install dependencies
bun dev            # Start dev server (http://localhost:3000)
bun run build      # Production build
bun start          # Start production server
bun lint           # Run ESLint
bun typecheck      # Run TypeScript type checking
```

## Build Status

- ✅ TypeScript: No errors
- ✅ ESLint: No warnings
- ✅ Build: All 6 routes statically generated

## Project Configuration

### Next.js Config (`next.config.ts`)
- Default settings, App Router enabled

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- Path alias: `@/*` → `src/*`

### Tailwind CSS 4 (`globals.css`)
- CSS-first configuration with `@theme`
- Brand colors: orange accent (#c2410c)
- Custom component classes
- Inter font via next/font/google

## Key Dependencies

### Production
- `next` ^16.1.3
- `react` ^19.2.3
- `react-dom` ^19.2.3

### Dev
- `typescript` ^5.9.3
- `tailwindcss` ^4.1.17
- `@tailwindcss/postcss` ^4.1.17
- `eslint` ^9.39.1
- `eslint-config-next` ^16.0.0

## SEO Implementation

### Schema.org JSON-LD (in layout.tsx)
- Organization schema
- LocalBusiness schema (Hyderabad, geo coordinates)
- FAQPage schema (5 FAQs)

### Metadata
- Page-level metadata exports on all pages
- Keywords, OpenGraph, robots configuration
- Canonical URLs via alternates

### Files
- `public/robots.txt` — allow all, link to sitemap
- `public/sitemap.xml` — 5 URLs with priorities

## Placeholder Values (Need Updating)

| Item | Current Value | Action Needed |
|------|---------------|---------------|
| WhatsApp Number | 919876543210 | Replace with real number |
| Email | info@legendindustries.in | Confirm or update |
| Phone | +91 98765 43210 | Replace with real number |
| Domain | legendindustries.in | Confirm domain |

## Performance

- All pages are static (○ prerendered)
- Only 2 client components (Header toggle, InquiryWidget)
- No external API calls
- Minimal JavaScript bundle
- Inter font with `display: swap`
