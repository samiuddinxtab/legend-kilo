# LEGEND INDUSTRIES — Style Guide

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-50` | `#fff7ed` | Light backgrounds, hover states |
| `brand-100` | `#ffedd5` | Subtle accent backgrounds |
| `brand-400` | `#fb923c` | Text accents on dark backgrounds |
| `brand-500` | `#c2410c` | **Primary accent** — buttons, links, labels |
| `brand-600` | `#9a3412` | Button hover state |
| `brand-700` | `#7c2d12` | Button active state |
| `neutral-50` | `#fafaf9` | Page background |
| `neutral-100` | `#f5f5f4` | Alternate section backgrounds |
| `neutral-200` | `#e7e5e4` | Borders, dividers |
| `neutral-600` | `#57534e` | Body text |
| `neutral-800` | `#292524` | Headings, dark text |
| `neutral-900` | `#1c1917` | Dark section backgrounds, footer |

### Typography

- **Font**: Inter — loaded via Google Fonts CDN with <link rel="preload"> pattern in BaseLayout.astro. Not using next/font. Fallback: system-ui, -apple-system, sans-serif.
- **Headings**: Bold, tight tracking
  - `h1`: `text-3xl` → `sm:text-4xl` → `lg:text-5xl`
  - `h2`: `text-2xl` → `sm:text-3xl` → `lg:text-4xl`
  - `h3`: `text-xl` → `sm:text-2xl`
  - `h4`: `text-lg` → `sm:text-xl`
- **Body**: `text-base`, `leading-relaxed`
- **Labels**: `text-sm`, `font-semibold`, `tracking-widest`, `uppercase`

### Spacing

- 8px grid system
- Section padding: `py-16` → `sm:py-20` → `lg:py-24`
- Container: `max-w-6xl`, `px-4` → `sm:px-6` → `lg:px-8`
- Card padding: `p-6` → `sm:p-8`
- Gap between grid items: `gap-6` (cards), `gap-8` (sections), `gap-10` (footer)

### Component Classes

```css
.container-site    /* max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 */
.section-padding   /* py-16 sm:py-20 lg:py-24 */
.btn-primary       /* Orange filled button, min-h-12 */
.btn-secondary     /* Dark filled button */
.btn-outline       /* Bordered button */
.btn-whatsapp      /* Green WhatsApp button */
.card              /* White rounded card with border */
.section-label     /* Small uppercase orange label */
.section-title     /* Large bold heading */
.section-desc      /* Subtitle text */
```

### Button Sizes

| Size | Padding | Text |
|------|---------|------|
| `sm` | `py-2 px-4` | `text-sm` |
| `md` | `py-3 px-6` | `text-base` |
| `lg` | `py-4 px-8` | `text-lg` |

All buttons: `min-h-12` (48px minimum touch target)

### Icons

- Icons are centralized in `src/components/icons/index.tsx`
- All icons have `aria-hidden="true"` and `focusable="false"`
- Use the `renderIcon(name: string)` utility for data-driven icon rendering
- Icon sizes: 16px (inline), 20px (default), 24px (nav), 32px (feature), 36px (product)

### Responsive Breakpoints

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| (base) | 0px | Mobile |
| `sm:` | 640px | Large mobile / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

### Dark Sections

Used for hero areas, CTAs, and the testimonial card:
- Background: `bg-neutral-900`
- Text: `text-white`
- Accent: `text-brand-400`
- Muted: `text-neutral-300` or `text-neutral-400`

### Accessibility

- Skip navigation link (`.sr-only` → visible on focus)
- All SVG icons: `aria-hidden="true"`, `focusable="false"`
- Color contrast: neutral-800 on neutral-50 (14.5:1 ratio)
- Touch targets: `min-h-12` (48px)
- Focus visible: `outline-2 outline-offset-2 outline-brand-500`
- Semantic HTML: `<section>`, `<nav>`, `<article>`, `<figure>`, `<figcaption>`, `<address>`, `<dl>`, `<dt>`, `<dd>`
- ARIA labels on nav landmarks, forms, and interactive elements
