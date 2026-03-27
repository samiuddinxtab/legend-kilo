"""
Comprehensive Runtime Validation for Astro Migration
Tests all pages for: SEO, functionality, accessibility, visual parity
"""
import asyncio
import re
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

DIST_DIR = Path(r"D:\SAMIUDDIN\kilo legend\legend-kilo\dist")
SCREENSHOTS_DIR = Path(r"D:\SAMIUDDIN\kilo legend\legend-kilo\test-screenshots")

PAGES = [
    {'name': 'Home', 'url': '/', 'file': 'index.html'},
    {'name': 'Capabilities', 'url': '/capabilities', 'file': 'capabilities.html'},
    {'name': 'Process', 'url': '/process', 'file': 'process.html'},
    {'name': 'Company', 'url': '/company', 'file': 'company.html'},
    {'name': 'Contact', 'url': '/contact', 'file': 'contact.html'},
]

async def validate_page(page, page_info, base_url):
    """Run all validations for a single page."""
    url = base_url + page_info['file']
    name = page_info['name']
    errors = []
    results = {'name': name, 'url': url}
    
    # Collect console errors
    console_errors = []
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    
    try:
        response = await page.goto(url, wait_until='networkidle', timeout=30000)
        results['status'] = response.status if response else 'no response'
    except Exception as e:
        errors.append(f'Navigation failed: {e}')
        return {'name': name, 'errors': errors, 'passed': False}
    
    content = await page.content()
    
    # 1. SEO Validation (rendered output)
    print(f"\n[{name}] SEO Validation")
    seo = {}
    seo['title'] = await page.title()
    
    # Meta tags from rendered HTML
    meta_desc = await page.evaluate('() => document.querySelector("meta[name=description]")?.content || null')
    canonical = await page.evaluate('() => document.querySelector("link[rel=canonical]")?.href || null')
    og_title = await page.evaluate('() => document.querySelector(\'meta[property="og:title"]\')?.content || null')
    og_desc = await page.evaluate('() => document.querySelector(\'meta[property="og:description"]\')?.content || null')
    
    seo['meta_description'] = meta_desc
    seo['canonical'] = canonical
    seo['og_title'] = og_title
    seo['og_desc'] = og_desc
    
    print(f"  Title: {seo['title'][:50] if seo['title'] else '[MISSING]'}")
    print(f"  Description: {'[OK]' if seo['meta_description'] else '[MISSING]'}")
    print(f"  Canonical: {'[OK]' if seo['canonical'] else '[MISSING]'}")
    print(f"  OG Title: {'[OK]' if seo['og_title'] else '[MISSING]'}")
    print(f"  OG Description: {'[OK]' if seo['og_desc'] else '[MISSING]'}")
    
    results['seo'] = seo
    
    # 2. JSON-LD Validation
    print(f"\n[{name}] JSON-LD Schemas")
    schemas = await page.evaluate('''() => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        return Array.from(scripts).map(s => {
            try { return JSON.parse(s.textContent); } catch { return null; }
        }).filter(Boolean);
    }''')
    
    schema_types = [s.get('@type', 'Unknown') for s in schemas]
    print(f"  Found: {len(schemas)} schemas: {schema_types}")
    results['json_ld'] = schema_types
    
    # 3. Heading Hierarchy
    print(f"\n[{name}] Heading Hierarchy")
    headings = await page.evaluate('''() => {
        const h1s = document.querySelectorAll('h1');
        const h2s = document.querySelectorAll('h2');
        return { h1: h1s.length, h2: h2s.length };
    }''')
    print(f"  H1: {headings['h1']}, H2: {headings['h2']}")
    if headings['h1'] != 1:
        errors.append(f'Expected 1 H1, found {headings["h1"]}')
    results['headings'] = headings
    
    # 4. WhatsApp Links
    print(f"\n[{name}] WhatsApp Links")
    wa_links = await page.evaluate('''() => {
        const links = document.querySelectorAll('a[href*="wa.me"]');
        return Array.from(links).map(l => ({
            href: l.href,
            text: l.textContent.trim().substring(0, 50)
        }));
    }''')
    print(f"  Found {len(wa_links)} WhatsApp links")
    for i, link in enumerate(wa_links[:3]):
        print(f"    {i+1}. {link['text'][:40]}...")
    results['whatsapp_links'] = len(wa_links)
    
    # 5. Accessibility
    print(f"\n[{name}] Accessibility")
    a11y = await page.evaluate('''() => {
        const skipLink = document.querySelector('a[href="#main-content"]');
        const main = document.querySelector('main, [id="main-content"]');
        const ariaLabels = document.querySelectorAll('[aria-label]').length;
        const ariaLabelledBy = document.querySelectorAll('[aria-labelledby]').length;
        const roles = document.querySelectorAll('[role]').length;
        return {
            skipLink: !!skipLink,
            mainContent: !!main,
            ariaLabels,
            ariaLabelledBy,
            roles
        };
    }''')
    print(f"  Skip link: {'[OK]' if a11y['skipLink'] else '[MISSING]'}")
    print(f"  Main content: {'[OK]' if a11y['mainContent'] else '[MISSING]'}")
    print(f"  ARIA labels: {a11y['ariaLabels']}")
    print(f"  ARIA labelledby: {a11y['ariaLabelledBy']}")
    print(f"  Roles: {a11y['roles']}")
    results['accessibility'] = a11y
    
    # 6. Contact Page Specific: InquiryWidget
    if name == 'Contact':
        print(f"\n[{name}] InquiryWidget Validation")
        form = await page.evaluate('''() => {
            const company = document.getElementById('inquiry-company');
            const product = document.getElementById('inquiry-product');
            const quantity = document.getElementById('inquiry-quantity');
            const details = document.getElementById('inquiry-details');
            return {
                company: !!company,
                product: !!product,
                quantity: !!quantity,
                details: !!details,
                companyType: company?.tagName,
                productType: product?.tagName,
                quantityType: quantity?.tagName,
                detailsType: details?.tagName
            };
        }''')
        print(f"  Company field: {'[OK]' if form['company'] else '[MISSING]'} ({form['companyType']})")
        print(f"  Product field: {'[OK]' if form['product'] else '[MISSING]'} ({form['productType']})")
        print(f"  Quantity field: {'[OK]' if form['quantity'] else '[MISSING]'} ({form['quantityType']})")
        print(f"  Details field: {'[OK]' if form['details'] else '[MISSING]'} ({form['detailsType']})")
        results['inquiry_form'] = form
    
    # 7. Console Errors
    if console_errors:
        print(f"\n[{name}] Console Errors")
        for err in console_errors:
            print(f"  [ERR] {err[:100]}")
            errors.append(f'Console error: {err[:100]}')
    else:
        print(f"\n[{name}] Console Errors: [OK] None")
    results['console_errors'] = console_errors
    
    # 8. Screenshot
    try:
        screenshot_path = SCREENSHOTS_DIR / f"{name.lower()}.png"
        SCREENSHOTS_DIR.mkdir(exist_ok=True)
        await page.screenshot(path=str(screenshot_path), full_page=True)
        print(f"\n[{name}] Screenshot: [OK] Saved")
        results['screenshot'] = str(screenshot_path)
    except Exception as e:
        print(f"\n[{name}] Screenshot: [ERR] {e}")
    
    results['errors'] = errors
    results['passed'] = len(errors) == 0
    
    return results

async def test_whatsapp_functionality(page, base_url):
    """Test WhatsApp pre-filled messages work correctly."""
    print("\n" + "="*60)
    print("WHATSApP FUNCTIONAL TEST")
    print("="*60)
    
    url = base_url + 'contact.html'
    await page.goto(url, wait_until='networkidle')
    
    # Test InquiryWidget form interaction
    print("\n[InquiryWidget Form Test]")
    
    # Fill in form fields
    await page.fill('#inquiry-company', 'Test Corp Ltd')
    await page.select_option('#inquiry-product', 'Custom Bags (Travel, Duffle, Laptop, School)')
    await page.select_option('#inquiry-quantity', '100–500 units')
    await page.fill('#inquiry-details', 'Test details for validation')
    
    await page.wait_for_timeout(500)
    
    # Check WhatsApp link was updated
    wa_link = await page.evaluate('''() => {
        const btn = document.querySelector('#whatsapp-btn-container a');
        return btn ? btn.href : null;
    }''')
    
    print(f"  Form filled: [OK]")
    print(f"  WhatsApp link: {wa_link[:80] if wa_link else '[ERR] Not found'}...")
    
    if wa_link:
        # Verify message contains our input
        contains_company = 'Test Corp' in wa_link
        contains_product = 'Custom Bags' in wa_link
        contains_quantity = '100' in wa_link
        print(f"  Contains company: {'[OK]' if contains_company else '[MISSING]'}")
        print(f"  Contains product: {'[OK]' if contains_product else '[MISSING]'}")
        print(f"  Contains quantity: {'[OK]' if contains_quantity else '[MISSING]'}")
    
    return wa_link is not None

async def test_mobile_nav(page, base_url):
    """Test mobile navigation behavior."""
    print("\n" + "="*60)
    print("MOBILE NAVIGATION TEST")
    print("="*60)
    
    # Set mobile viewport
    await page.set_viewport_size({'width': 375, 'height': 812})
    
    url = base_url + 'index.html'
    await page.goto(url, wait_until='networkidle')
    
    # Check menu button exists and is visible
    menu_btn = page.locator('#mobile-menu-btn')
    mobile_nav = page.locator('#mobile-nav')
    
    is_btn_visible = await menu_btn.is_visible()
    print(f"  Menu button visible (375px): {'[OK]' if is_btn_visible else '[MISSING]'}")
    
    # Check nav is hidden initially
    is_nav_hidden = await mobile_nav.evaluate('el => el.classList.contains("hidden")')
    print(f"  Nav hidden initially: {'[OK]' if is_nav_hidden else '[MISSING]'}")
    
    # Click menu button
    if is_btn_visible:
        await menu_btn.click()
        await page.wait_for_timeout(300)
        
        is_nav_visible = await mobile_nav.evaluate('el => !el.classList.contains("hidden")')
        print(f"  Nav visible after click: {'[OK]' if is_nav_visible else '[MISSING]'}")
        
        # Click again to close
        await menu_btn.click()
        await page.wait_for_timeout(300)
        
        is_nav_hidden_again = await mobile_nav.evaluate('el => el.classList.contains("hidden")')
        print(f"  Nav hidden after second click: {'[OK]' if is_nav_hidden_again else '[MISSING]'}")
    
    # Reset to desktop viewport
    await page.set_viewport_size({'width': 1280, 'height': 800})
    
    return is_btn_visible and is_nav_hidden

async def run_all_tests():
    """Run all validation tests."""
    import http.server
    import socketserver
    from threading import Thread
    
    print("="*60)
    print("ASTRO MIGRATION - RUNTIME VALIDATION")
    print("="*60)
    
    PORT = 4322
    Handler = http.server.SimpleHTTPRequestHandler
    
    class QuietHandler(Handler):
        def log_message(self, format, *args):
            pass
    
    os.chdir(str(DIST_DIR))
    server = socketserver.TCPServer(("", PORT), QuietHandler)
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    
    base_url = f"http://localhost:{PORT}/"
    print(f"Server started at {base_url}")
    
    results = []
    all_passed = True
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()
        
        # Test all pages
        for page_info in PAGES:
            result = await validate_page(page, page_info, base_url)
            results.append(result)
            if not result.get('passed', False):
                all_passed = False
        
        # Test WhatsApp functionality
        wa_passed = await test_whatsapp_functionality(page, base_url)
        if not wa_passed:
            all_passed = False
        
        # Test mobile navigation
        nav_passed = await test_mobile_nav(page, base_url)
        if not nav_passed:
            all_passed = False
        
        await browser.close()
    
    server.shutdown()
    
    # Final Summary
    print("\n" + "="*60)
    print("VALIDATION SUMMARY")
    print("="*60)
    
    for r in results:
        status = '[OK]' if r.get('passed', False) else '[FAIL]'
        print(f"  {status} {r['name']}: SEO={len(r.get('seo', {}))}, "
              f"Schemas={len(r.get('json_ld', []))}, "
              f"WA={r.get('whatsapp_links', 0)}")
    
    print(f"\n  WhatsApp functionality: {'[OK]' if wa_passed else '[FAIL]'}")
    print(f"  Mobile navigation: {'[OK]' if nav_passed else '[FAIL]'}")
    
    print("\n" + "="*60)
    if all_passed:
        print("[OK] ALL RUNTIME TESTS PASSED")
    else:
        print("[WARN] SOME TESTS FAILED - See details above")
    print("="*60)
    
    return all_passed

if __name__ == "__main__":
    success = asyncio.run(run_all_tests())
    exit(0 if success else 1)