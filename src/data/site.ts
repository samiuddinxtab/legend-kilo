import blogArticles from './blog-articles.json';

/**
 * Centralized data layer for site content.
 * Keeps page components lean and content easily maintainable.
 */

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/process", label: "Process" },
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/process", label: "Process" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
] as const;

export const PRODUCT_LINKS = [
  { href: "/capabilities#bags", label: "Custom Bags" },
  { href: "/capabilities#eco", label: "Jute & Cotton Bags" },
  { href: "/capabilities#corporate", label: "Corporate Gifting" },
  { href: "/capabilities#utility", label: "Utility Products" },
] as const;

export const WHATSAPP_NUMBER = "919052088880";
export const EMAIL_ADDRESS = "legendindustries92@gmail.com";
export const PHONE_NUMBER = "+91 90520 88880";
export const PHONE_TEL = "+919052088880";

export const SITE_URL = "https://legendindustries.in";

export const LOCATIONS = [
  {
    name: "LEGEND INDUSTRIES BAG MANUFACTURERS (Office)",
    address: "VN Plaza, 10-3-773/2, Vijaynagar Colony, Masab Tank, Hyderabad, Telangana 500057",
    mapsUrl: "https://maps.app.goo.gl/ppFxYiXzBsNmtgmR9",
    embedQuery: "VN Plaza, 10-3-773/2, Vijaynagar Colony, Masab Tank, Hyderabad, Telangana 500057",
  },
  {
    name: "LEGEND INDUSTRIES (Factory)",
    address: "H. No. 12, 2-37/1, A/46/A, Zeba Bagh, Asif Nagar, Hyderabad, Telangana 500028",
    mapsUrl: "https://maps.app.goo.gl/bKzYGcqhrKtQbsBm8",
    embedQuery: "H. No. 12, 2-37/1, A/46/A, Zeba Bagh, Asif Nagar, Hyderabad, Telangana 500028",
  },
] as const;

export const CAPABILITIES = [
  {
    icon: "factory" as const,
    title: "Custom Manufacturing",
    desc: "Full custom bag production — travel, duffle, laptop, school. Logo to complete design, built for your brand.",
  },
  {
    icon: "palette" as const,
    title: "Complete Customization",
    desc: "Logo printing, material selection, size adjustments, color matching, custom packaging. Your specs, our execution.",
  },
  {
    icon: "truck" as const,
    title: "PAN India Delivery",
    desc: "Structured production with 1–3 week timelines. Reliable delivery across India for repeat and bulk orders.",
  },
  {
    icon: "shield" as const,
    title: "Quality & Reliability",
    desc: "Since 1998, consistent production quality with structured quality checks before every dispatch.",
  },
] as const;

export const QUALIFICATION_POINTS = [
  "You need B2B quantities (typically 100+ units)",
  "You require custom branding or design",
  "You represent a company, institution, or distributor",
  "You need reliable, repeat supply",
  "Your budget aligns with custom manufacturing (typically ₹50k+ project value)",
] as const;

export const NOT_A_FIT = [
  "Looking for 1–10 pieces for personal use",
  "Want the cheapest price regardless of quality",
  "One-time retail purchase",
  "No branding or customization needed",
] as const;

export const FAQS = [
  {
    q: "What is the minimum order quantity?",
    a: "We specialize in bulk orders. Typical minimums start around 100 units, but this varies by product. Contact us with your specific requirements for an accurate quote.",
  },
  {
    q: "What is the typical production timeline?",
    a: "Production typically takes 1–3 weeks depending on order size and customization complexity. Delivery timelines are discussed during the order process.",
  },
  {
    q: "Can you customize products with our company logo?",
    a: "Yes, customization is our core strength. We offer logo printing, custom sizes, material selection, color combinations, and custom packaging for bulk orders.",
  },
  {
    q: "Do you supply PAN India?",
    a: "Yes. Our production facility is in Hyderabad, Telangana, and we deliver to clients across India.",
  },
  {
    q: "How do I get a quote?",
    a: "Share your requirement via WhatsApp or email — product type, quantity, and branding needs. We'll respond with options and pricing.",
  },
  {
    q: "What materials do you use for bag manufacturing?",
    a: "We work with a variety of materials including canvas, nylon, polyester, jute, cotton, and leatherette. Material selection depends on your requirements, budget, and intended use case.",
  },
  {
    q: "Do you provide samples before bulk production?",
    a: "Yes, we provide design mockups and samples for custom orders. Sample approval is required before production begins to ensure the final product meets your expectations.",
  },
  {
    q: "What is your pricing structure?",
    a: "Pricing depends on product type, quantity, materials, and customization requirements. We offer competitive pricing for bulk orders. Share your requirements for a detailed quote.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    icon: "message" as const,
    title: "Share Your Requirement",
    desc: "Tell us what you need — product type, approximate quantity, branding requirements, and any specific details. You can reach us via WhatsApp, email, or phone.",
    details: [
      "Product type and category",
      "Approximate quantity needed",
      "Logo / branding requirements",
      "Any specific material or size preferences",
      "Expected timeline or deadline",
    ],
  },
  {
    num: "02",
    icon: "search" as const,
    title: "We Discuss Options",
    desc: "Based on your requirement, we discuss available options — materials, designs, pricing range, and timelines. This step ensures alignment before anything moves forward.",
    details: [
      "Material options and suitability",
      "Design possibilities and limitations",
      "Pricing structure for your quantity",
      "Timeline estimation",
      "Clarification on any details",
    ],
  },
  {
    num: "03",
    icon: "checkSquare" as const,
    title: "Sample / Design Approval",
    desc: "For custom orders, we share design mockups or samples for approval. Nothing goes into production without your sign-off.",
    details: [
      "Design mockup or physical sample",
      "Color and material confirmation",
      "Logo placement and sizing approval",
      "Final specifications locked",
    ],
  },
  {
    num: "04",
    icon: "cog" as const,
    title: "Production Begins",
    desc: "Once approved, production starts. We maintain structured quality checks throughout the manufacturing process.",
    details: [
      "Raw material sourcing and preparation",
      "Manufacturing with quality checkpoints",
      "Branding and customization applied",
      "Final quality inspection before packing",
    ],
  },
  {
    num: "05",
    icon: "truck" as const,
    title: "Delivery",
    desc: "Finished products are packed, inspected, and dispatched within the committed timeline. PAN India delivery available.",
    details: [
      "Products packed per specifications",
      "Final count and quality verification",
      "Dispatched within 1–3 week timeline",
      "Delivery tracking and confirmation",
    ],
  },
] as const;

export const PRODUCT_OPTIONS = [
  "Custom Bags (Travel, Duffle, Laptop, School)",
  "Jute & Cotton Eco Bags",
  "Corporate Gifting Items",
  "Utility Products (Water Bottles, etc.)",
  "Multiple Categories",
] as const;

export const QUANTITY_OPTIONS = [
  "100–300 units (starter B2B)",
  "300–1,000 units",
  "1,000–5,000 units",
  "5,000+ units",
  "Need MOQ guidance",
] as const;

export const BAG_TYPES = [
  "Travel bags",
  "Duffle bags",
  "Laptop bags",
  "School bags",
  "Drawstring bags",
  "Promotional bags",
  "Gym bags",
  "Sling and messenger bags",
  "Conference and event bags",
  "Retail packaging bags",
] as const;

export const ECO_TYPES = [
  "Jute bags",
  "Cotton tote bags",
  "Eco-friendly promotional bags",
  "Reusable shopping bags",
  "Organic cotton drawstring bags",
  "Bottle carry and produce bags",
] as const;

export const CORPORATE_TYPES = [
  "Office stationery (non-kid)",
  "Corporate kits",
  "Promotional combinations",
  "Employee onboarding kits",
  "Executive gifting sets",
  "Event giveaway packs",
] as const;

export const UTILITY_TYPES = [
  "Water bottles",
  "Daily-use branded items",
  "Combo gift sets",
  "Lunch and storage accessories",
  "Desk essentials",
  "Travel utility kits",
] as const;

export const CUSTOMIZATION_OPTIONS = [
  {
    icon: "paintbrush" as const,
    title: "Logo Printing & Branding",
    desc: "Screen printing, embroidery, heat transfer, and more. Your brand, prominently displayed.",
  },
  {
    icon: "fileText" as const,
    title: "Size & Dimensions",
    desc: "Custom sizing to fit your specific use case. Standard and non-standard dimensions available.",
  },
  {
    icon: "cog" as const,
    title: "Material Selection",
    desc: "Canvas, nylon, polyester, jute, cotton, leatherette — choose what fits your brand and budget.",
  },
  {
    icon: "palette" as const,
    title: "Color Combinations",
    desc: "Match your brand colors precisely. We work with custom color specifications.",
  },
  {
    icon: "gift" as const,
    title: "Packaging & Finishing",
    desc: "Individual poly bags, custom boxes, branded tags, hang tags — packaging that matches your standards.",
  },
] as const;

export const CLIENT_TYPES = [
  {
    title: "Corporate Companies",
    desc: "Employee kits, onboarding packages, branded merchandise, and promotional items for internal and external use.",
  },
  {
    title: "Distributors & Wholesalers",
    desc: "Consistent bulk supply for distribution networks. Reliable production capacity for repeat orders.",
  },
  {
    title: "Institutions & Organizations",
    desc: "Schools, colleges, NGOs, and other organizations needing branded bags and products in volume.",
  },
  {
    title: "Event & Marketing Agencies",
    desc: "Promotional bags, event kits, and branded products for campaigns, conferences, and corporate events.",
  },
] as const;

export const WHY_CHOOSE = [
  "Consistent production quality across every order",
  "Reliable delivery timelines — 1 to 3 weeks",
  "Strong experience in custom and bulk orders",
  "Direct factory-level manufacturing",
  "Suitable for repeat and long-term business",
  "PAN India supply capability",
  "Full customization — logo to complete design",
  "Structured quality checks before dispatch",
] as const;

export const BLOG_ARTICLES = blogArticles;
