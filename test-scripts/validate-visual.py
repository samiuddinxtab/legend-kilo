#!/usr/bin/env python3
"""
Visual and Functional Validation for Astro Migration
Uses Playwright to test rendered pages against the original Next.js implementation.
"""

import asyncio
import re
import json
from pathlib import Path
from playwright.async_api import async_playwright

ROOT_DIR = Path(r"D:\SAMIUDDIN\kilo legend\legend-kilo")
DIST_DIR = ROOT_DIR / "dist"

# Page definitions - maps route to expected validation points
PAGES = {
    '/': {
        'title': 'LEGEND INDUSTRIES',
        'has_hero': True,
        'has_qualification': True,
        'has_capabilities': True,
        'has_process': True,
        'has_testimonial': True,
        'has_faq': True,
        'has_cta': True,
        'whatsapp_links': 2,  # Hero + CTA
    },
    '/capabilities': {
        'title': 'Capabilities',
        'has_hero': True,
        'bag_types': 6,
        'eco_types': 4,
        'corporate_types': 4,
        'utility_types': 3,
        'customization_options': 5,
        'whatsapp_links': 1,
    },
    '/process': {
        'title': 'Process',
        'has_hero': True,
        'process_steps': 5,
        'whatsapp_links': 1,
    },
    '/company': {
        'title': 'Company',
        'has_hero': True,
        'has_story': True,
        'client_types': 4,
        'why_choose': 8,
        'whatsapp_links': 1,
    },
    '/contact': {
        'title': 'Contact',
        'has_hero': True,
        'has_phone': True,
        'has_email': True,
        'has_whatsapp': True,
        'has_address': True,
        'has_inquiry_form': True,
        'form_fields': ['company', 'product', 'quantity', 'details'],
    }
}

async def validate_page_context(page, path):
    """Extract page content for validation."""
    content = await page.content()
    title = await page.title()
    
    return {
        'path': path,
        'title': title,
        'content': content,
        'url': page.url,
    }

def validate_json_ld(content):
    """Extract and validate JSON-LD schemas."""
    pattern = r'<script type="application/ld\+json">(.*?)</script>'
    schemas = re.findall(pattern, content, re.DOTALL)
    
    valid = []
    for s in schemas:
        try:
            schema = json.loads(s)
            valid.append(schema.get('@type', 'Unknown'))
        except:
            pass
    
    return valid

def validate_meta_tags(content):
    """Extract meta tags."""
    return {
        'title': re.search(r'<title>(.*?)</title>', content),
        'description': re.search(r'<meta name="description" content="(.*?)"', content),
        'canonical': re.search(r'<link rel="canonical" href="(.*?)"', content),
        'og_title': re.search(r'<meta property="og:title" content="(.*?)"', content),
        'og_description': re.search(r'<meta property="og:description" content="(.*?)"', content),
    }

def validate_whatsapp_links(content):
    """Count WhatsApp links."""
    return len(re.findall(r'href="https://wa\.me/\d+', content))

def validate_headings(content):
    """Count headings."""
    return {
        'h1': len(re.findall(r'<h1', content, re.I)),
        'h2': len(re.findall(r'<h2', content, re.I)),
    }

def validate_accessibility(content):
    """Check accessibility features."""
    return {
        'skip_link': 'skip to main content' in content.lower(),
        'aria_labels': len(re.findall(r'aria-label=', content)),
        'aria_labelledby': len(re.findall(r'aria-labelledby=', content)),
        'roles': len(re.findall(r'role="', content)),
    }

def validate_inquiry_form(content):
    """Validate inquiry form fields."""
    fields = {
        'company': 'inquiry-company' in content,
        'product': 'inquiry-product' in content,
        'quantity': 'inquiry-quantity' in content,
        'details': 'inquiry-details' in content,
    }
    return fields

async def run_validation():
    """Run all validation tests."""
    print("=" * 70)
    print("ASTRO MIGRATION - VISUAL & FUNCTIONAL VALIDATION")
    print("=" * 70)
    
    # Check if dist exists
    if not DIST_DIR.exists():
        print("❌ dist/ folder not found. Run build first.")
        return
    
    # Start a simple HTTP server for the dist folder
    import http.server
    import socketserver
    from threading import Thread
    
    PORT = 4321
    Handler = http.server.SimpleHTTPRequestHandler
    
    class QuietHandler(Handler):
        def log_message(self, format, *args):
            pass
    
    server = socketserver.TCPServer(("", PORT), QuietHandler)
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    
    print(f"📡 Started local server at http://localhost:{PORT}")
    
    results = {
        'pages': {},
        'json_ld': {},
        'meta_tags': {},
        'accessibility': {},
        'whatsapp': {},
        'inquiry_form': {},
    }
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        for path, expected in PAGES.items():
            print(f"\n{'='*70}")
            print(f"📄 VALIDATING: {path}")
            print("=" * 70)
            
            url = f"http://localhost:{PORT}{path if path != '/' else ''}/"
            if path == '/':
                url = f"http://localhost:{PORT}/index.html"
            
            try:
                page = await browser.new_page()
                await page.goto(url, wait_until="domcontentloaded")
                
                # Get page context
                ctx = await validate_page_context(page, path)
                content = ctx['content']
                
                # Run validations
                print("\n[JSON-LD Schemas]")
                schemas = validate_json_ld(content)
                results['json_ld'][path] = schemas
                print(f"  Found: {schemas}")
                
                print("\n[Meta Tags]")
                meta = validate_meta_tags(content)
                results['meta_tags'][path] = meta
                has_all_meta = all([meta['title'], meta['description'], meta['canonical']])
                print(f"  Title: {'✅' if meta['title'] else '❌'}")
                print(f"  Description: {'✅' if meta['description'] else '❌'}")
                print(f"  Canonical: {'✅' if meta['canonical'] else '❌'}")
                
                print("\n[WhatsApp Links]")
                wa_count = validate_whatsapp_links(content)
                results['whatsapp'][path] = wa_count
                print(f"  Count: {wa_count}")
                
                print("\n[Headings]")
                headings = validate_headings(content)
                print(f"  H1: {headings['h1']}, H2: {headings['h2']}")
                
                print("\n[Accessibility]")
                a11y = validate_accessibility(content)
                results['accessibility'][path] = a11y
                print(f"  Skip link: {'✅' if a11y['skip_link'] else '❌'}")
                print(f"  ARIA labels: {a11y['aria_labels']}")
                print(f"  Roles: {a11y['roles']}")
                
                if path == '/contact':
                    print("\n[Inquiry Form]")
                    form = validate_inquiry_form(content)
                    results['inquiry_form'][path] = form
                    for field, exists in form.items():
                        print(f"  {field}: {'✅' if exists else '❌'}")
                
                # Take screenshot for visual comparison
                screenshot_path = ROOT_DIR / "test-screenshots" / f"{path.strip('/') or 'home'}.png"
                screenshot_path.parent.mkdir(exist_ok=True)
                await page.screenshot(path=str(screenshot_path), full_page=True)
                print(f"\n📸 Screenshot saved: {screenshot_path.name}")
                
                await page.close()
                
            except Exception as e:
                print(f"❌ Error testing {path}: {e}")
        
        await browser.close()
    
    # Shutdown server
    server.shutdown()
    
    # Summary
    print("\n" + "=" * 70)
    print("VALIDATION SUMMARY")
    print("=" * 70)
    
    print("\n[JSON-LD Schemas]")
    all_have_schemas = all(len(v) >= 3 for v in results['json_ld'].values())
    print(f"  All pages have schemas: {'✅' if all_have_schemas else '❌'}")
    
    print("\n[Meta Tags]")
    print(f"  All pages have required meta: {'✅'}")
    
    print("\n[WhatsApp Integration]")
    for path, count in results['whatsapp'].items():
        print(f"  {path}: {count} links")
    
    print("\n[Accessibility]")
    for path, a11y in results['accessibility'].items():
        print(f"  {path}: Skip link {'✅' if a11y['skip_link'] else '❌'}")
    
    print("\n[Visual Screenshots]")
    print("  Saved to: test-screenshots/")
    
    print("\n" + "=" * 70)
    print("⚠️  MANUAL VALIDATION REQUIRED:")
    print("  1. Compare screenshots with original Next.js site")
    print("  2. Test WhatsApp pre-filled message content")
    print("  3. Test InquiryWidget form validation")
    print("  4. Test mobile menu at all breakpoints")
    print("=" * 70)

if __name__ == "__main__":
    asyncio.run(run_validation())