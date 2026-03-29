# System Patterns: LEGEND INDUSTRIES Website

## Architecture Overview

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata + JSON-LD schemas
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system (Tailwind v4)
│   ├── capabilities/
│   │   └── page.tsx        # Products & customization
│   ├── process/
│   │   └── page.tsx        # Order flow
│   ├── company/
│   │   └── page.tsx        # About & credibility
│   └── contact/
│       └── page.tsx        # WhatsApp-first conversion
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header + mobile nav ("use client")
│   │   └── Footer.tsx      # Site footer
│   └── ui/
│       ├── WhatsAppButton.tsx   # Reusable WhatsApp CTA
│       ├── InquiryWidget.tsx    # Pre-filled message generator ("use client")
│       └── SectionHeader.tsx    # Reusable section header
public/
├── robots.txt              # SEO
├── sitemap.xml             # SEO
└── favicon.ico             # Icon
```

## Key Design Patterns

### 1. Server Components by Default
All pages are Server Components. Only two components use `"use client"`:
- `Header.tsx` — mobile menu toggle
- `InquiryWidget.tsx` — form state management

### 2. No Forms, Pre-filled Messages
Instead of server-side form handling:
- InquiryWidget collects inputs in React state
- Generates URL-encoded WhatsApp/email links
- User clicks → opens WhatsApp/email with pre-filled message
- No server processing, no database, no validation needed

### 3. Design System via CSS
Tailwind CSS v4 with `@theme` for:
- Brand colors (orange accent)
- Neutral palette
- Custom component classes (btn-primary, card, section-label, etc.)
- 8px grid spacing via Tailwind utilities

### 4. SEO via Metadata API + JSON-LD
- JSON-LD schemas in layout.tsx (Organization, LocalBusiness, FAQPage)
- robots.txt + sitemap.xml in public/

## Component Patterns

### WhatsAppButton
```tsx
<WhatsAppButton
  message="Pre-filled message text"
  label="Button Label"
  size="md"  // sm | md | lg
/>
```

### InquiryWidget
Self-contained component with:
- Client name input
- Company name input
- Product category dropdown
- Quantity range dropdown
- Expected delivery timeline
- Optional details textarea
- WhatsApp + Email buttons (enabled only when required fields filled)

### SectionHeader
```tsx
<SectionHeader
  label="Section Label"
  title="Section Title"
  description="Optional description"
  align="left"  // left | center
/>
```

## Styling Conventions

- Tailwind utilities directly on elements
- Custom component classes for repeated patterns (btn-primary, card, etc.)
- Responsive: `sm:`, `md:`, `lg:`, `xl:`
- Mobile-first approach (base styles are mobile, scale up)
- Max-width container: `max-w-6xl`
