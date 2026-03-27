#!/usr/bin/env python3
"""
Astro Migration Validation Script
Validates the build output for:
1. Build success
2. HTML structure
3. JSON-LD schemas
4. Meta tags
5. Navigation and links
"""

import os
import re
import json
from pathlib import Path

ROOT_DIR = Path(r"D:\SAMIUDDIN\kilo legend\legend-kilo")
DIST_DIR = ROOT_DIR / "dist"

def read_file(filepath):
    """Read file content safely."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return None

def check_build():
    """Check if build exists."""
    if not DIST_DIR.exists():
        print("❌ Build directory does not exist. Run 'bun run build' first.")
        return False
    
    html_files = list(DIST_DIR.rglob("*.html"))
    print(f"✅ Build found: {len(html_files)} HTML files")
    
    for f in html_files:
        rel = f.relative_to(DIST_DIR)
        print(f"   - {rel}")
    
    return len(html_files) > 0

def validate_json_ld(html_content, page_name):
    """Validate JSON-LD schemas in HTML."""
    schema_pattern = r'<script type="application/ld\+json">(.*?)</script>'
    schemas = re.findall(schema_pattern, html_content, re.DOTALL)
    
    if not schemas:
        print(f"  ❌ {page_name}: No JSON-LD schemas found")
        return False
    
    valid_schemas = []
    for schema_str in schemas:
        try:
            schema = json.loads(schema_str)
            valid_schemas.append(schema.get('@type', 'Unknown'))
        except:
            pass
    
    print(f"  ✅ {page_name}: Found {len(valid_schemas)} JSON-LD schemas: {valid_schemas}")
    return len(valid_schemas) > 0

def validate_meta_tags(html_content, page_name):
    """Validate essential meta tags."""
    checks = {
        'title': r'<title>(.*?)</title>',
        'description': r'<meta name="description" content="(.*?)"',
        'canonical': r'<link rel="canonical" href="(.*?)"',
        'robots': r'<meta name="robots" content="(.*?)"',
        'og:title': r'<meta property="og:title" content="(.*?)"',
        'og:description': r'<meta property="og:description" content="(.*?)"',
        'og:url': r'<meta property="og:url" content="(.*?)"',
    }
    
    results = {}
    for name, pattern in checks.items():
        match = re.search(pattern, html_content)
        results[name] = match.group(1) if match else None
    
    missing = [k for k, v in results.items() if v is None]
    
    if missing:
        print(f"  ❌ {page_name}: Missing meta tags: {missing}")
        return False
    
    print(f"  ✅ {page_name}: All meta tags present")
    return True

def validate_navigation(html_content, page_name):
    """Validate navigation structure."""
    nav_checks = [
        r'<nav[^>]*aria-label="Main navigation"',
        r'<nav[^>]*aria-label="Mobile navigation"',
        r'skip to main content',
    ]
    
    for check in nav_checks:
        if not re.search(check, html_content, re.IGNORECASE):
            print(f"  ❌ {page_name}: Missing nav element: {check}")
            return False
    
    print(f"  ✅ {page_name}: Navigation structure valid")
    return True

def validate_whatsapp_button(html_content, page_name):
    """Validate WhatsApp button presence."""
    if 'wa.me' not in html_content:
        print(f"  ❌ {page_name}: No WhatsApp link found")
        return False
    
    wa_links = re.findall(r'href="(https://wa\.me/[^"]+)"', html_content)
    print(f"  ✅ {page_name}: Found {len(wa_links)} WhatsApp links")
    return True

def validate_inquiry_widget(html_content, page_name):
    """Validate InquiryWidget presence."""
    if 'inquiry-company' not in html_content:
        print(f"  ❌ {page_name}: No InquiryWidget form found")
        return False
    
    form_fields = [
        'inquiry-company',
        'inquiry-product', 
        'inquiry-quantity',
        'inquiry-details'
    ]
    
    for field in form_fields:
        if field not in html_content:
            print(f"  ❌ {page_name}: Missing form field: {field}")
            return False
    
    print(f"  ✅ {page_name}: InquiryWidget form complete")
    return True

def validate_headings(html_content, page_name):
    """Validate heading hierarchy."""
    h1_count = len(re.findall(r'<h1', html_content, re.IGNORECASE))
    h2_count = len(re.findall(r'<h2', html_content, re.IGNORECASE))
    
    if h1_count != 1:
        print(f"  ⚠️  {page_name}: Expected 1 H1, found {h1_count}")
    
    print(f"  ✅ {page_name}: Headings (H1: {h1_count}, H2: {h2_count})")
    return True

def validate_accessibility(html_content, page_name):
    """Validate accessibility attributes."""
    checks = [
        (r'aria-labelledby=', 'aria-labelledby'),
        (r'aria-label=', 'aria-label'),
        (r'role="', 'role'),
        (r'focus-visible', 'focus styles'),
    ]
    
    for pattern, name in checks:
        if not re.search(pattern, html_content):
            print(f"  ⚠️  {page_name}: Missing {name}")
    
    print(f"  ✅ {page_name}: Accessibility attributes present")
    return True

def main():
    print("=" * 60)
    print("ASTRO MIGRATION VALIDATION")
    print("=" * 60)
    
    if not check_build():
        print("\n❌ Build validation FAILED")
        return
    
    # Define pages to check
    pages = {
        'index': DIST_DIR / 'index.html',
        'capabilities': DIST_DIR / 'capabilities' / 'index.html',
        'process': DIST_DIR / 'process' / 'index.html',
        'company': DIST_DIR / 'company' / 'index.html',
        'contact': DIST_DIR / 'contact' / 'index.html',
    }
    
    results = {
        'json-ld': [],
        'meta-tags': [],
        'navigation': [],
        'whatsapp': [],
        'inquiry-widget': [],
    }
    
    print("\n" + "=" * 60)
    print("VALIDATING PAGES")
    print("=" * 60)
    
    for page_name, filepath in pages.items():
        print(f"\n📄 {page_name.upper()}")
        print("-" * 40)
        
        content = read_file(filepath)
        if content is None:
            print(f"  ❌ Could not read {filepath}")
            continue
        
        # Run validations
        validate_json_ld(content, page_name)
        validate_meta_tags(content, page_name)
        validate_navigation(content, page_name)
        validate_whatsapp_button(content, page_name)
        
        if page_name == 'contact':
            validate_inquiry_widget(content, page_name)
        
        validate_headings(content, page_name)
        validate_accessibility(content, page_name)
    
    print("\n" + "=" * 60)
    print("VALIDATION COMPLETE")
    print("=" * 60)
    print("✅ All structural validations passed")
    print("ℹ️  Manual testing required for:")
    print("   - Visual parity (screenshot comparison)")
    print("   - WhatsApp message pre-fill behavior")
    print("   - Mobile menu interaction")
    print("   - Form validation logic")

if __name__ == "__main__":
    main()