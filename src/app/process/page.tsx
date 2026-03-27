import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How bulk orders work at LEGEND INDUSTRIES. Simple, structured process from requirement sharing to delivery. 1–3 week production timelines.",
};

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

function MessageCircleIcon() {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function SearchIcon() {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CheckSquareIcon() {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CogIcon() {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 7 1.5-1.5" />
      <path d="M5.5 18.5 7 17" />
      <path d="m17 17 1.5 1.5" />
      <path d="M5.5 5.5 7 7" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
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

const STEPS = [
  {
    num: "01",
    icon: <MessageCircleIcon />,
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
    icon: <SearchIcon />,
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
    icon: <CheckSquareIcon />,
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
    icon: <CogIcon />,
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
    icon: <TruckIcon />,
    title: "Delivery",
    desc: "Finished products are packed, inspected, and dispatched within the committed timeline. PAN India delivery available.",
    details: [
      "Products packed per specifications",
      "Final count and quality verification",
      "Dispatched within 1–3 week timeline",
      "Delivery tracking and confirmation",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
            How It Works
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Simple, Structured{" "}
            <span className="text-brand-400">Process</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            No confusion, no unnecessary back-and-forth. Share your requirement,
            we handle the rest. Here&apos;s exactly how orders work at LEGEND
            INDUSTRIES.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-site">
          <div className="space-y-0">
            {STEPS.map((step, index) => (
              <div
                key={step.num}
                className="relative grid md:grid-cols-[80px_1fr] gap-6 md:gap-8 pb-12 last:pb-0"
              >
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 bottom-0 w-px bg-neutral-200" />
                )}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-20 h-20 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center relative">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="section-label mb-2">Step {step.num}</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-5">
                    {step.desc}
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                      What Happens
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-neutral-700"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-brand-500 shrink-0 mt-0.5"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Timelines"
            title="What to Expect"
            align="center"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Initial Response",
                time: "Same business day",
                desc: "We respond to inquiries during business hours (Mon–Sat, 9 AM – 6 PM).",
              },
              {
                title: "Quote & Discussion",
                time: "1–2 business days",
                desc: "Detailed discussion on options, pricing, and timelines after understanding your requirement.",
              },
              {
                title: "Production & Delivery",
                time: "1–3 weeks",
                desc: "Depends on order size and customization. Exact timeline confirmed before production starts.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-2xl font-bold text-brand-500 mb-1">
                  {item.time}
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Be Prepared"
                title="What We Need From You"
                description="The more details you share upfront, the faster we can give you accurate options and pricing."
              />
              <ul className="space-y-4">
                {[
                  "Company or organization name",
                  "Product type and category",
                  "Approximate quantity",
                  "Logo or branding requirements",
                  "Any material or size preferences",
                  "Timeline or deadline (if any)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-brand-500 shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-neutral-900 text-white border-neutral-800">
              <h3 className="text-xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Share your requirement via WhatsApp or email. We&apos;ll respond
                with options and next steps during business hours.
              </p>
              <div className="flex flex-col gap-3">
                <WhatsAppButton
                  message="Hi, I'd like to start a bulk order discussion.\n\nCompany: \nProduct: \nQuantity: \nBranding: "
                  label="Start on WhatsApp"
                />
                <Link
                  href="/contact"
                  className="btn-outline border-neutral-600 text-white hover:border-brand-400 hover:text-brand-400"
                >
                  View All Contact Options
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
