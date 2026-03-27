#!/usr/bin/env node
/**
 * Astro Migration - Source Code Validation
 * Validates source files for structure, SEO, accessibility, and integration
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');

function readFile(filepath) {
  try {
    return fs.readFileSync(filepath, 'utf8');
  } catch {
    return '';
  }
}

function checkPattern(content, pattern, flags = '') {
  return new RegExp(pattern, flags).test(content);
}

console.log('='.repeat(60));
console.log('ASTRO MIGRATION - SOURCE CODE VALIDATION');
console.log('='.repeat(60));

let allPassed = true;

// 1. Validate Layout
console.log('\n[LAYOUT] src/layouts/BaseLayout.astro');
const layoutPath = path.join(SRC_DIR, 'layouts', 'BaseLayout.astro');
const layoutContent = readFile(layoutPath);

const layoutChecks = {
  'title tag': /<title>\{title\}<\/title>/.test(layoutContent),
  'meta description': /<meta name="description" content=\{description\}/.test(layoutContent),
  'canonical URL': /<link rel="canonical"/.test(layoutContent),
  'og:title': /<meta property="og:title"/.test(layoutContent),
  'og:description': /<meta property="og:description"/.test(layoutContent),
  'og:url': /<meta property="og:url"/.test(layoutContent),
  'robots meta': /<meta name="robots"/.test(layoutContent),
};

const layoutSchemas = (layoutContent.match(/<script type="application\/ld\+json">/g) || []).length;
console.log(`  JSON-LD schemas: ${layoutSchemas}`);

for (const [name, passed] of Object.entries(layoutChecks)) {
  console.log(`  ${name}: ${passed ? '✅' : '❌'}`);
  if (!passed) allPassed = false;
}

// 2. Validate Pages
console.log('\n[PAGES]');
const pages = [
  { file: 'index.astro', path: '/', minWA: 2, hasH1: true },
  { file: 'capabilities.astro', path: '/capabilities', minWA: 1, hasH1: true },
  { file: 'process.astro', path: '/process', minWA: 1, hasH1: true },
  { file: 'company.astro', path: '/company', minWA: 1, hasH1: true },
  { file: 'contact.astro', path: '/contact', minWA: 1, hasH1: true, hasForm: true },
];

for (const page of pages) {
  const pagePath = path.join(SRC_DIR, 'pages', page.file);
  const content = readFile(pagePath);
  
  const waCount = (content.match(/WhatsAppButton/g) || []).length;
  const h1Count = (content.match(/<h1[^>]*id=/g) || []).length;
  const titleMatch = content.match(/const title = "(.*?)"/);
  const descMatch = content.match(/const description = "(.*?)"/);
  
  console.log(`\n  ${page.file}`);
  console.log(`    Title: ${titleMatch ? titleMatch[1].substring(0, 30) + '...' : '❌'}`);
  console.log(`    Description: ${descMatch ? '✅' : '❌'}`);
  console.log(`    WhatsAppButtons: ${waCount} (min: ${page.minWA}) ${waCount >= page.minWA ? '✅' : '❌'}`);
  console.log(`    H1 headings: ${h1Count} ${page.hasH1 ? (h1Count === 1 ? '✅' : '❌') : ''}`);
  
  if (page.hasForm) {
    const hasCompany = content.includes('inquiry-company');
    const hasProduct = content.includes('inquiry-product');
    const hasQuantity = content.includes('inquiry-quantity');
    const hasDetails = content.includes('inquiry-details');
    const hasInquiryWidget = content.includes('InquiryWidget');
    console.log(`    InquiryWidget: ${hasInquiryWidget ? '✅' : '❌'}`);
    console.log(`    Form fields: ${hasCompany && hasProduct && hasQuantity && hasDetails ? '✅ (4/4)' : '❌'}`);
  }
}

// 3. Validate Components
console.log('\n[COMPONENTS]');
const components = [
  'Header.astro',
  'Footer.astro', 
  'WhatsAppButton.astro',
  'InquiryWidget.astro',
  'SectionHeader.astro',
  'TestimonialCard.astro',
  'Icons.astro',
];

for (const comp of components) {
  const compPath = path.join(SRC_DIR, 'components', comp);
  const exists = fs.existsSync(compPath);
  console.log(`  ${comp}: ${exists ? '✅' : '❌'}`);
  if (!exists) allPassed = false;
}

// 4. Validate Data Layer
console.log('\n[DATA LAYER] src/data/site.ts');
const dataPath = path.join(SRC_DIR, 'data', 'site.ts');
const dataContent = readFile(dataPath);

const dataExports = [
  'NAV_ITEMS',
  'WHATSAPP_NUMBER', 
  'EMAIL_ADDRESS',
  'PHONE_NUMBER',
  'CAPABILITIES',
  'QUALIFICATION_POINTS',
  'FAQS',
  'PROCESS_STEPS',
  'BAG_TYPES',
  'CUSTOMIZATION_OPTIONS',
];

for (const exp of dataExports) {
  const found = dataContent.includes(`export const ${exp}`);
  console.log(`  ${exp}: ${found ? '✅' : '❌'}`);
  if (!found) allPassed = false;
}

// 5. Validate Utilities
console.log('\n[UTILITIES]');
const utils = [
  'src/utils/links.ts',
  'src/utils/render-icon.ts',
];

for (const util of utils) {
  const utilPath = path.join(ROOT_DIR, util);
  const exists = fs.existsSync(utilPath);
  console.log(`  ${util}: ${exists ? '✅' : '❌'}`);
  if (!exists) allPassed = false;
}

// 6. Validate Accessibility
console.log('\n[ACCESSIBILITY]');
const headerPath = path.join(SRC_DIR, 'components', 'Header.astro');
const headerContent = readFile(headerPath);

const a11yChecks = {
  'Skip link': /skip to main content/i.test(headerContent),
  'aria-label (nav)': /aria-label="Main navigation"/.test(headerContent),
  'aria-label (mobile)': /aria-label="Mobile navigation"/.test(headerContent),
  'aria-expanded': /aria-expanded/.test(headerContent),
  'aria-controls': /aria-controls/.test(headerContent),
};

for (const [name, passed] of Object.entries(a11yChecks)) {
  console.log(`  Header - ${name}: ${passed ? '✅' : '❌'}`);
  if (!passed) allPassed = false;
}

const footerPath = path.join(SRC_DIR, 'components', 'Footer.astro');
const footerContent = readFile(footerPath);
console.log(`  Footer - role="contentinfo": ${footerContent.includes('role="contentinfo"') ? '✅' : '❌'}`);

// 7. Validate CSS
console.log('\n[TAILWIND CSS] src/styles/global.css');
const cssPath = path.join(SRC_DIR, 'styles', 'global.css');
const cssContent = readFile(cssPath);

const cssChecks = {
  'brand-400': cssContent.includes('brand-400'),
  'brand-500': cssContent.includes('brand-500'),
  'btn-primary': cssContent.includes('.btn-primary'),
  'btn-outline': cssContent.includes('.btn-outline'),
  'btn-whatsapp': cssContent.includes('.btn-whatsapp'),
  'card': cssContent.includes('.card'),
  'container-site': cssContent.includes('.container-site'),
  'section-padding': cssContent.includes('.section-padding'),
};

for (const [name, passed] of Object.entries(cssChecks)) {
  console.log(`  ${name}: ${passed ? '✅' : '❌'}`);
  if (!passed) allPassed = false;
}

// 8. Validate Astro Config
console.log('\n[ASTRO CONFIG] astro.config.mjs');
const configPath = path.join(ROOT_DIR, 'astro.config.mjs');
const configContent = readFile(configPath);

const configChecks = {
  'site URL': /site:\s*'https:\/\/legendindustries\.in'/.test(configContent),
  'Tailwind integration': /@astrojs\/tailwind/.test(configContent),
  'Static output': /output:\s*'static'/.test(configContent),
};

for (const [name, passed] of Object.entries(configChecks)) {
  console.log(`  ${name}: ${passed ? '✅' : '❌'}`);
  if (!passed) allPassed = false;
}

// Summary
console.log('\n' + '='.repeat(60));
if (allPassed) {
  console.log('✅ ALL SOURCE VALIDATIONS PASSED');
} else {
  console.log('⚠️  SOME VALIDATIONS FAILED - See details above');
}
console.log('='.repeat(60));
console.log('\nNOTE: This validates source code structure only.');
console.log('Run "bun install && bun run build" for complete validation.');