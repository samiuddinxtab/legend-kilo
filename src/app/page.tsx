import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

function FactoryIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-500 shrink-0 mt-0.5"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    icon: <FactoryIcon />,
    title: "Custom Manufacturing",
    desc: "Full custom bag production — travel, duffle, laptop, school. Logo to complete design, built for your brand.",
  },
  {
    icon: <PaletteIcon />,
    title: "Complete Customization",
    desc: "Logo printing, material selection, size adjustments, color matching, custom packaging. Your specs, our execution.",
  },
  {
    icon: <TruckIcon />,
    title: "PAN India Delivery",
    desc: "Structured production with 1–3 week timelines. Reliable delivery across India for repeat and bulk orders.",
  },
  {
    icon: <ShieldIcon />,
    title: "Quality & Reliability",
    desc: "Since 1998, consistent production quality with structured quality checks before every dispatch.",
  },
];

const QUALIFICATION_POINTS = [
  "You need bulk quantities (100+ units)",
  "You require custom branding or design",
  "You represent a company, institution, or distributor",
  "You need reliable, repeat supply",
  "Your budget aligns with custom manufacturing (typically ₹40k+ orders)",
];

const NOT_A_FIT = [
  "Looking for 1–10 pieces for personal use",
  "Want the cheapest price regardless of quality",
  "One-time retail purchase",
  "No branding or customization needed",
];

const FAQS = [
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
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
              Bulk Bag Manufacturing &middot; Since 1998
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Custom Bags & Corporate Products,{" "}
              <span className="text-brand-400">Built for Business.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              LEGEND INDUSTRIES manufactures custom bags and corporate gifting
              items in bulk. Full customization, reliable delivery, PAN India
              supply. We work with businesses, not individual buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/capabilities" className="btn-primary">
                View Capabilities
                <ArrowRightIcon />
              </Link>
              <WhatsAppButton
                message="Hi, I'm interested in bulk bag manufacturing from LEGEND INDUSTRIES. Please share details on products and pricing."
                label="Quick Inquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualification / Filter */}
      <section className="section-padding bg-brand-50 border-y border-brand-100">
        <div className="container-site">
          <SectionHeader
            label="Before You Proceed"
            title="Is LEGEND INDUSTRIES Right for You?"
            description="We focus on bulk manufacturing and corporate supply. Not every inquiry is the right fit — and that's intentional."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircleIcon />
                You&apos;re a good fit if:
              </h3>
              <ul className="space-y-3">
                {QUALIFICATION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircleIcon />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                This may not be the right fit if:
              </h3>
              <ul className="space-y-3">
                {NOT_A_FIT.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-400 shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                    <span className="text-sm text-neutral-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            label="What We Do"
            title="Manufacturing That Delivers"
            description="Custom bags, corporate gifting, and utility products — all produced in bulk with full branding support."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {CAPABILITIES.map((item) => (
              <div key={item.title} className="card">
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/capabilities" className="btn-outline">
              View All Capabilities
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="How It Works"
            title="Simple, Structured Process"
            description="No confusion. Share your requirement, we handle the rest."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Share Requirement",
                desc: "Product type, quantity, branding needs via WhatsApp or email.",
              },
              {
                step: "02",
                title: "Discuss Options",
                desc: "We review and discuss material, design, and pricing options.",
              },
              {
                step: "03",
                title: "Sample / Approval",
                desc: "Design or sample approval before production begins.",
              },
              {
                step: "04",
                title: "Production",
                desc: "Bulk manufacturing with quality checks at every stage.",
              },
              {
                step: "05",
                title: "Delivery",
                desc: "Dispatched within committed 1–3 week timeline.",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-neutral-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
                {index < 4 && (
                  <div className="hidden lg:block mt-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-neutral-300 mx-auto"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/process" className="btn-outline">
              View Full Process
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Since 1998</span>
              <h2 className="section-title mt-3 mb-4">
                25+ Years of Reliable Manufacturing
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                LEGEND INDUSTRIES has been producing bags and corporate products
                from Hyderabad since 1998. Our focus has always been on
                execution quality, reliable timelines, and building long-term
                business relationships.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "25+", label: "Years" },
                  { value: "PAN", label: "India Supply" },
                  { value: "100%", label: "Custom Focus" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-500">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/company" className="btn-outline">
                Learn More About Us
                <ArrowRightIcon />
              </Link>
            </div>
            <div className="card bg-neutral-900 text-white border-neutral-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-neutral-200 leading-relaxed mb-6 text-sm">
                &ldquo;Vast variety to choose from — Impeccable Quality at a
                very reasonable Pricing. Delivered at a Short notice. Thanks.
                Genuinely recommended.&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-white text-sm">
                  Dr. Khizer Hussain Junaidy
                </div>
                <div className="text-neutral-400 text-xs">
                  Local Guide &middot; 77 reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Common Questions"
            title="Frequently Asked"
            align="center"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-neutral-900 hover:text-brand-500 transition-colors">
                  {faq.q}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-400 group-open:rotate-180 transition-transform shrink-0"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-neutral-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Ready to Discuss Your Requirement?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            Share your product needs, quantity, and branding requirements. We
            respond within business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hi, I'd like to discuss a bulk order for custom bags / corporate gifting from LEGEND INDUSTRIES."
              label="Chat on WhatsApp"
              size="lg"
            />
            <Link href="/contact" className="btn-outline border-neutral-600 text-white hover:border-brand-400 hover:text-brand-400">
              View All Contact Options
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
