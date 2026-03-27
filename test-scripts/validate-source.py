#!/usr/bin/env python3
"""
Source-Code Based Astro Migration Validation
Validates the source files before build to ensure:
1. All required components are in place
2. Meta tags and SEO are correct
3. JSON-LD schemas are present
4. WhatsApp integration is complete
5. Form fields are correct
6. Accessibility is maintained
"""

import os
import re
import json
from pathlib import Path
from typing import Dict, List, Any

ROOT_DIR = Path(r"D:\SAMIUDDIN\kilo legend\legend-kilo")
SRC_DIR = ROOT_DIR / "src"

def read_file(filepath: Path) -> str:
    """Read file content."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ""

def validate_layout() -> Dict[str, Any]:
    """Validate BaseLayout.astro."""
    print("\n" + "="*60)
    print("VALIDATING: src/layouts/BaseLayout.astro")
    print("="*60)
    
    layout_path = SRC_DIR / "layouts" / "BaseLayout.astro"
    content = read_file(layout_path)
    
    results = {
        'exists': layout_path.exists(),
    }
    
    # Check meta tags
    print("\n[Meta Tags]")
    meta_checks = {
        'title': r'<title>{title}</title>',
        'description': r'<meta name="description" content={description}',
        'canonical': r'<link rel="canonical"',
        'og:title': r'<meta property="og:title"',
        'og:description': r'<meta property="og:description"',
        'og:url': r'<meta property="og:url"',
        'robots': r'<meta name="robots"',
    }
    
    for name, pattern in meta_checks.items():
        found = bool(re.search(pattern, content))
        results[f'meta_{name}'] = found
        print(f"  {name}: {'✅' if found else '❌'}")
    
    # Check JSON-LD schemas
    print("\n[JSON-LD Schemas]")
    schemas = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    results['schemas_count'] = len(schemas)
    print(f"  Found: {len(schemas)} schemas")
    
    for i, schema in enumerate(schemas):
        try:
            data = json.loads(schema)
            schema_type = data.get('@type', 'Unknown')
            print(f"    {i+1}. {schema_type}")
        except:
            print(f"    {i+1}. (invalid JSON)")
    
    return results

def validate_pages() -> Dict[str, Any]:
    """Validate all page components."""
    print("\n" + "="*60)
    print("VALIDATING: Page Components")
    print("="*60)
    
    pages_dir = SRC_DIR / "pages"
    pages = {
        'index.astro': '/',
        'capabilities.astro': '/capabilities',
        'process.astro': '/process',
        'company.astro': '/company',
        'contact.astro': '/contact',
    }
    
    results = {}
    
    for filename, url_path in pages.items():
        page_path = pages_dir / filename
        content = read_file(page_path)
        
        print(f"\n[{filename}]")
        
        page_results = {
            'exists': page_path.exists(),
        }
        
        # Check page title prop
        title_match = re.search(r'const title = "(.*?)"', content)
        if title_match:
            page_results['title'] = title_match.group(1)
            print(f"  Title: {title_match.group(1)}")
        
        # Check description prop
        desc_match = re.search(r'const description = "(.*?)"', content)
        if desc_match:
            page_results['description'] = desc_match.group(1)[:50] + "..."
            print(f"  Description: {desc_match.group(1)[:50]}...")
        
        # Check for WhatsApp buttons
        wa_count = len(re.findall(r'WhatsAppButton', content))
        page_results['whatsapp_count'] = wa_count
        print(f"  WhatsAppButtons: {wa_count}")
        
        # Check H1 headings
        h1_count = len(re.findall(r'<h1[^>]*id=', content))
        page_results['h1_count'] = h1_count
        print(f"  H1 headings: {h1_count}")
        
        # Check contact page specific
        if filename == 'contact.astro':
            # Check InquiryWidget
            has_inquiry = 'InquiryWidget' in content
            page_results['has_inquiry_widget'] = has_inquiry
            print(f"  InquiryWidget: {'✅' if has_inquiry else '❌'}")
            
            # Check form fields
            form_fields = ['inquiry-company', 'inquiry-product', 'inquiry-quantity', 'inquiry-details']
            for field in form_fields:
                has_field = field in content
                page_results[f'has_{field}'] = has_field
            
            print(f"  Form fields: {sum([page_results.get(f'has_{f}', False) for f in form_fields])}/4")
        
        results[url_path] = page_results
    
    return results

def validate_components() -> Dict[str, Any]:
    """Validate UI components."""
    print("\n" + "="*60)
    print("VALIDATING: UI Components")
    print("="*60)
    
    components_dir = SRC_DIR / "components"
    
    required_components = {
        'Header.astro': 'Header + mobile nav',
        'Footer.astro': 'Footer',
        'WhatsAppButton.astro': 'WhatsApp CTA button',
        'InquiryWidget.astro': 'Inquiry form',
        'SectionHeader.astro': 'Section header',
        'TestimonialCard.astro': 'Testimonial',
        'Icons.astro': 'Icon library',
    }
    
    results = {}
    
    for comp_name, desc in required_components.items():
        comp_path = components_dir / comp_name
        exists = comp_path.exists()
        results[comp_name] = exists
        print(f"  {comp_name}: {'✅' if exists else '❌'} - {desc}")
    
    return results

def validate_data() -> Dict[str, Any]:
    """Validate data layer."""
    print("\n" + "="*60)
    print("VALIDATING: Data Layer")
    print("="*60)
    
    data_path = SRC_DIR / "data" / "site.ts"
    content = read_file(data_path)
    
    results = {
        'exists': data_path.exists(),
    }
    
    # Check key data exports
    exports = [
        'NAV_ITEMS',
        'WHATSAPP_NUMBER',
        'EMAIL_ADDRESS',
        'CAPABILITIES',
        'QUALIFICATION_POINTS',
        'FAQS',
        'PROCESS_STEPS',
    ]
    
    for export in exports:
        found = f'export const {export}' in content
        results[f'has_{export}'] = found
        print(f"  {export}: {'✅' if found else '❌'}")
    
    return results

def validate_accessibility() -> Dict[str, Any]:
    """Validate accessibility features."""
    print("\n" + "="*60)
    print("VALIDATING: Accessibility Features")
    print("="*60)
    
    # Check Header for skip link
    header_path = SRC_DIR / "components" / "Header.astro"
    header_content = read_file(header_path)
    
    results = {}
    
    checks = {
        'skip_link': r'skip to main content',
        'aria_label_nav': r'aria-label="Main navigation"',
        'aria_label_mobile': r'aria-label="Mobile navigation"',
        'aria_expanded': r'aria-expanded',
        'aria_controls': r'aria-controls',
    }
    
    for name, pattern in checks.items():
        found = bool(re.search(pattern, header_content, re.IGNORECASE))
        results[name] = found
        print(f"  Header - {name}: {'✅' if found else '❌'}")
    
    # Check Footer accessibility
    footer_path = SRC_DIR / "components" / "Footer.astro"
    footer_content = read_file(footer_path)
    
    footer_checks = {
        'role_contentinfo': r'role="contentinfo"',
        'aria_label': r'aria-label="Footer',
    }
    
    for name, pattern in footer_checks.items():
        found = bool(re.search(pattern, footer_content, re.IGNORECASE))
        results[f'footer_{name}'] = found
        print(f"  Footer - {name}: {'✅' if found else '❌'}")
    
    return results

def validate_css() -> Dict[str, Any]:
    """Validate Tailwind CSS configuration."""
    print("\n" + "="*60)
    print("VALIDATING: Tailwind CSS Configuration")
    print("="*60)
    
    css_path = SRC_DIR / "styles" / "global.css"
    content = read_file(css_path)
    
    results = {
        'exists': css_path.exists(),
    }
    
    # Check brand colors
    brand_colors = ['brand-50', 'brand-400', 'brand-500', 'brand-600', 'brand-700']
    for color in brand_colors:
        found = color in content
        results[f'has_{color}'] = found
    
    print("  Brand colors:", " ".join([f"{c}{'✅' if results.get(f'has_{c}', False) else '❌'}" for c in brand_colors]))
    
    # Check utility classes
    utilities = ['.btn-primary', '.btn-outline', '.btn-whatsapp', '.card', '.container-site', '.section-padding']
    for util in utilities:
        found = util in content
        results[f'has_{util.replace(".", "")}'] = found
    
    print("  Utilities:", " ".join([f"{u}{'✅' if results.get(f'has_{u.replace(\".\", \"\")}', False) else '❌'}" for u in utilities]))
    
    return results

def validate_config() -> Dict[str, Any]:
    """Validate Astro configuration."""
    print("\n" + "="*60)
    print("VALIDATING: Astro Configuration")
    print("="*60)
    
    config_path = ROOT_DIR / "astro.config.mjs"
    content = read_file(config_path)
    
    results = {
        'exists': config_path.exists(),
    }
    
    checks = {
        'site_url': r"site:\s*'https://legendindustries.in'",
        'tailwind': r'@astrojs/tailwind',
        'output_static': r"output:\s*'static'",
    }
    
    for name, pattern in checks.items():
        found = bool(re.search(pattern, content))
        results[name] = found
        print(f"  {name}: {'✅' if found else '❌'}")
    
    return results

def main():
    print("="*60)
    print("ASTRO MIGRATION - SOURCE CODE VALIDATION")
    print("="*60)
    
    all_results = {}
    
    # Run all validations
    all_results['layout'] = validate_layout()
    all_results['pages'] = validate_pages()
    all_results['components'] = validate_components()
    all_results['data'] = validate_data()
    all_results['accessibility'] = validate_accessibility()
    all_results['css'] = validate_css()
    all_results['config'] = validate_config()
    
    # Summary
    print("\n" + "="*60)
    print("VALIDATION SUMMARY")
    print("="*60)
    
    # Layout
    layout_ok = all_results['layout'].get('meta_title', False) and all_results['layout'].get('schemas_count', 0) >= 3
    print(f"\n[Layout]")
    print(f"  Meta tags: {'✅' if all_results['layout'].get('meta_title', False) else '❌'}")
    print(f"  JSON-LD schemas (3+): {'✅' if all_results['layout'].get('schemas_count', 0) >= 3 else '❌'}")
    
    # Pages
    print(f"\n[Pages]")
    pages_ok = True
    for path, data in all_results['pages'].items():
        wa_count = data.get('whatsapp_count', 0)
        h1_ok = data.get('h1_count', 0) == 1
        print(f"  {path}: WhatsApp={wa_count}, H1={'✅' if h1_ok else '❌'}")
        if wa_count == 0 or not h1_ok:
            pages_ok = False
    
    # Components
    print(f"\n[Components]")
    comps_ok = all(all_results['components'].values())
    print(f"  All required components: {'✅' if comps_ok else '❌'}")
    
    # Data
    print(f"\n[Data Layer]")
    data_ok = all(all_results['data'].values())
    print(f"  All data exports: {'✅' if data_ok else '❌'}")
    
    # Accessibility
    print(f"\n[Accessibility]")
    a11y_ok = all(all_results['accessibility'].values())
    print(f"  All accessibility features: {'✅' if a11y_ok else '❌'}")
    
    # CSS
    print(f"\n[Tailwind CSS]")
    css_ok = all_results['css'].get('exists', False)
    print(f"  Configuration: {'✅' if css_ok else '❌'}")
    
    # Config
    print(f"\n[Astro Config]")
    config_ok = all(all_results['config'].values())
    print(f"  Configuration: {'✅' if config_ok else '❌'}")
    
    # Final verdict
    all_ok = layout_ok and pages_ok and comps_ok and data_ok and a11y_ok and css_ok and config_ok
    
    print("\n" + "="*60)
    if all_ok:
        print("✅ ALL SOURCE VALIDATIONS PASSED")
    else:
        print("⚠️  SOME VALIDATIONS FAILED - See details above")
    print("="*60)
    print("\nNOTE: This validates source code structure only.")
    print("      Full validation requires running the build and testing in browser.")
    print("      Run 'bun install && bun run build && bun run preview' for complete validation.")

if __name__ == "__main__":
    main()