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

export const WHATSAPP_NUMBER = "919876543210";
export const EMAIL_ADDRESS = "info@legendindustries.in";
export const PHONE_NUMBER = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";

export const SITE_URL = "https://legendindustries.in";

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
  "You need bulk quantities (100+ units)",
  "You require custom branding or design",
  "You represent a company, institution, or distributor",
  "You need reliable, repeat supply",
  "Your budget aligns with custom manufacturing (typically ₹40k+ orders)",
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
  "100–500 units",
  "500–1,000 units",
  "1,000–5,000 units",
  "5,000+ units",
  "Not sure yet",
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
    title: "Logo Printing & Branding",
    desc: "Screen printing, embroidery, heat transfer, and more. Your brand, prominently displayed.",
  },
  {
    title: "Size & Dimensions",
    desc: "Custom sizing to fit your specific use case. Standard and non-standard dimensions available.",
  },
  {
    title: "Material Selection",
    desc: "Canvas, nylon, polyester, jute, cotton, leatherette — choose what fits your brand and budget.",
  },
  {
    title: "Color Combinations",
    desc: "Match your brand colors precisely. We work with Pantone references and custom color specifications.",
  },
  {
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

export const BLOG_ARTICLES = [
  {
    slug: "choosing-right-bag-material-corporate-gifting",
    title: "Choosing the Right Bag Material for Corporate Gifting",
    description: "A comprehensive guide to selecting the perfect material for your corporate gift bags — from canvas to jute, we break down the pros and cons of each option.",
    content: `When it comes to corporate gifting, the material you choose speaks volumes about your brand. Here's our expert guide to selecting the right bag material for your business needs.

Canvas bags offer durability and a professional look, making them ideal for corporate employee kits and long-term brand visibility. They're cost-effective for bulk orders and can withstand repeated use.

Jute and cotton eco-friendly materials resonate with organizations prioritizing sustainability. These materials appeal to environmentally conscious clients and demonstrate your brand's commitment to responsible business practices.

Nylon and polyester are lightweight options perfect for promotional events and conferences. They offer vibrant color printing capabilities and quick drying properties.

Leatherette provides a premium feel for high-end corporate gifts, though at a higher price point. It's perfect for executive gifts andVIP client presentations.`,
    datePublished: "2026-03-15",
    author: "LEGEND INDUSTRIES Team",
    image: "/blog/bag-materials.jpg",
  },
  {
    slug: "bulk-order-timeline-expectations",
    title: "What to Expect: Bulk Order Timeline Breakdown",
    description: "Understanding the production timeline for bulk bag orders helps you plan better. Learn the typical stages from requirement to delivery.",
    content: `Planning a bulk order? Understanding the timeline helps ensure smooth execution and on-time delivery.

Stage 1: Requirement Gathering (1-2 days)
We discuss your product specifications, quantity, branding requirements, and timeline. The more details you provide upfront, the faster we can move forward.

Stage 2: Quote & Discussion (1-2 days)
Based on your requirements, we provide a detailed quote including material options, pricing, and production timeline. This is where we align expectations.

Stage 3: Sample/Design Approval (3-5 days)
For custom orders, we create design mockups or physical samples. Your approval on this stage locks in final specifications.

Stage 4: Production (1-2 weeks)
Actual production time depends on order size and customization complexity. We maintain quality checks at every stage.

Stage 5: Quality & Dispatch (1-2 days)
Final quality inspection, packaging, and dispatch. Delivery across India takes additional 3-7 days depending on location.`,
    datePublished: "2026-03-10",
    author: "LEGEND INDUSTRIES Team",
    image: "/blog/production-timeline.jpg",
  },
  {
    slug: "maximizing-roi-corporate-merchandise",
    title: "Maximizing ROI on Corporate Merchandise",
    description: "Strategic insights on getting the most value from your corporate merchandise budget while building lasting brand impressions.",
    content: `Corporate merchandise is an investment in brand visibility. Here's how to maximize your return on investment.

Quantity vs. Quality Balance
For maximum reach, balance quantity with quality. A well-made bag used repeatedly provides more brand exposure than cheap items discarded after one use.

Customization That Stands Out
Invest in customization that makes your brand memorable. Quality printing, thoughtful design, and durable materials ensure your merchandise gets used and seen.

Strategic Distribution
Focus on high-impact distribution: employee welcome kits, client gifts, event giveaways, and dealer/distributor support. Each touchpoint reinforces brand recognition.

Long-term Relationships
Building lasting supplier relationships leads to better pricing, priority production, and consistent quality across orders. This partnership approach maximizes value over time.`,
    datePublished: "2026-03-05",
    author: "LEGEND INDUSTRIES Team",
    image: "/blog/corporate-roi.jpg",
  },
] as const;