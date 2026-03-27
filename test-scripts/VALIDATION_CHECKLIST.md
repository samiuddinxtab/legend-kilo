# Astro Migration - Validation Checklist

## Source Code Structure Verification (Automated)

### ✅ Layout & SEO
- [x] BaseLayout.astro exists at `src/layouts/BaseLayout.astro`
- [x] Title tag with `{title}` prop
- [x] Meta description with `{description}` prop
- [x] Canonical URL link
- [x] Open Graph tags (og:title, og:description, og:url, og:locale, og:site_name)
- [x] Robots meta tag
- [x] Google Bot meta tags
- [x] JSON-LD schemas: 3 (Organization, LocalBusiness, FAQPage)

### ✅ Pages
| Page | File | Title Prop | Description Prop | WhatsApp Buttons | H1 Count |
|------|------|------------|-------------------|------------------|----------|
| Home | index.astro | ✅ | ✅ | 2 | 1 |
| Capabilities | capabilities.astro | ✅ | ✅ | 1 | 1 |
| Process | process.astro | ✅ | ✅ | 1 | 1 |
| Company | company.astro | ✅ | ✅ | 1 | 1 |
| Contact | contact.astro | ✅ | ✅ | 1 | 1 |

### ✅ Components
- [x] Header.astro (with skip link, mobile nav, ARIA)
- [x] Footer.astro (with role="contentinfo", contact info)
- [x] WhatsAppButton.astro (with pre-filled message support)
- [x] InquiryWidget.astro (with form validation, client:visible)
- [x] SectionHeader.astro
- [x] TestimonialCard.astro
- [x] Icons.astro (25+ icons)

### ✅ Data Layer
- [x] NAV_ITEMS
- [x] FOOTER_LINKS
- [x] PRODUCT_LINKS
- [x] WHATSAPP_NUMBER
- [x] EMAIL_ADDRESS
- [x] PHONE_NUMBER
- [x] PHONE_TEL
- [x] CAPABILITIES
- [x] QUALIFICATION_POINTS
- [x] NOT_A_FIT
- [x] FAQS
- [x] PROCESS_STEPS
- [x] PRODUCT_OPTIONS
- [x] QUANTITY_OPTIONS
- [x] BAG_TYPES
- [x] ECO_TYPES
- [x] CORPORATE_TYPES
- [x] UTILITY_TYPES
- [x] CUSTOMIZATION_OPTIONS
- [x] CLIENT_TYPES
- [x] WHY_CHOOSE

### ✅ Utilities
- [x] src/utils/links.ts (getWhatsAppHref, getEmailHref, getDefaultInquiryMessage)
- [x] src/utils/render-icon.ts

### ✅ Accessibility
- [x] Skip link in Header (href="#main-content")
- [x] aria-label="Main navigation" on desktop nav
- [x] aria-label="Mobile navigation" on mobile nav
- [x] aria-expanded on mobile menu button
- [x] aria-controls="mobile-nav" on mobile menu button
- [x] role="contentinfo" on Footer

### ✅ Tailwind CSS
- [x] Brand colors: brand-50 through brand-900
- [x] Neutral colors: neutral-50 through neutral-950
- [x] Custom utilities: btn-primary, btn-outline, btn-whatsapp, card, container-site, section-padding
- [x] Section utilities: section-label, section-title, section-desc

### ✅ Astro Configuration
- [x] site: 'https://legendindustries.in'
- [x] @astrojs/tailwind integration
- [x] output: 'static'
- [x] build format: 'file'

---

## Manual Validation Required

### Visual Parity
- [ ] Compare Home page hero section with original
- [ ] Compare Capabilities grid layout
- [ ] Compare Process timeline steps
- [ ] Compare Company stats section
- [ ] Compare Contact form layout
- [ ] Check all spacing/padding consistency
- [ ] Verify typography matches (Inter font, sizes)
- [ ] Verify color palette (brand-400, brand-500)

### Functional Checks
- [ ] Test WhatsApp pre-filled messages on all pages:
  - Home: Hero button, CTA button
  - Capabilities: CTA button
  - Process: "Start on WhatsApp" button
  - Company: CTA button
  - Contact: Multiple WhatsApp buttons
- [ ] Verify InquiryWidget validation:
  - Form fields: company, product, quantity, details
  - Validation: company required, product required, quantity required
  - WhatsApp link generation with form data
  - Email link generation with form data
- [ ] Test mobile menu at breakpoints:
  - 320px (small mobile)
  - 375px (mobile)
  - 768px (tablet - should show desktop nav)
  - 1024px (desktop)

### SEO Integrity
- [ ] Inspect rendered HTML for each page:
  - [ ] JSON-LD present and valid
  - [ ] Title tag correct
  - [ ] Meta description correct
  - [ ] Canonical URL correct
  - [ ] Open Graph tags present
  - [ ] Heading hierarchy (single H1, logical H2-H6)

### Performance
- [ ] Run Lighthouse on each page:
  - [ ] Mobile performance score
  - [ ] Desktop performance score
  - [ ] Accessibility score
  - [ ] Best practices score
  - [ ] SEO score
- [ ] Verify only InquiryWidget uses client-side JS
- [ ] Verify Header uses vanilla JS (no React hydration)

### Build & Deployment
- [ ] Run `bun install`
- [ ] Run `bun run build`
- [ ] Run `bun run preview`
- [ ] Verify no console errors
- [ ] Verify no hydration mismatches

---

## Testing Commands

```bash
# Install dependencies
bun install

# Build for production
bun run build

# Start preview server
bun run preview

# Run development server
bun run dev
```

---

## Validation Status

**Source Code Structure**: ✅ PASSED - All files present, correct structure

**Build & Runtime**: ⏳ PENDING - Requires manual testing

**Visual Parity**: ⏳ PENDING - Requires manual screenshot comparison

**Functional Tests**: ⏳ PENDING - Requires manual browser testing