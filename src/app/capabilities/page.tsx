import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Custom bags, jute & cotton eco bags, corporate gifting items, and utility products. Full customization with logo printing, material selection, and bulk production.",
};

function BackpackIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 11-10 11Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function PaintbrushIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m14.622 17.897-10.68-2.913" />
      <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
      <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
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

const BAG_TYPES = [
  "Travel bags",
  "Duffle bags",
  "Laptop bags",
  "School bags",
  "Drawstring bags",
  "Promotional bags",
];

const ECO_TYPES = [
  "Jute bags",
  "Cotton tote bags",
  "Eco-friendly promotional bags",
  "Reusable shopping bags",
];

const CORPORATE_TYPES = [
  "Office stationery (non-kid)",
  "Corporate kits",
  "Promotional combinations",
  "Employee onboarding kits",
];

const UTILITY_TYPES = [
  "Water bottles",
  "Daily-use branded items",
  "Combo gift sets",
];

const CUSTOMIZATION_OPTIONS = [
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
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
            Products & Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            What We <span className="text-brand-400">Manufacture</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Custom bags, eco-friendly options, corporate gifting items, and
            utility products — all manufactured in bulk with full customization
            support.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section id="bags" className="section-padding">
        <div className="container-site">
          <SectionHeader
            label="Product Category 01"
            title="Custom Bags"
            description="Designed for bulk production with custom branding. Travel, duffle, laptop, school, drawstring, and promotional bags."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-16 h-16 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5">
                <BackpackIcon />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Bag Types
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {BAG_TYPES.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-2 text-sm text-neutral-700"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-brand-500 shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-900 text-white rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-4">Best Suited For</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Corporate employee kits and welcome packages
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Event and promotional campaigns
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Distributor and wholesale supply
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Institutional requirements (schools, colleges)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="eco" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Product Category 02"
            title="Jute & Cotton Eco Bags"
            description="Eco-friendly bags suitable for corporate gifting and sustainable branding initiatives."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ECO_TYPES.map((type) => (
              <div key={type} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <LeafIcon />
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm">
                  {type}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate" className="section-padding">
        <div className="container-site">
          <SectionHeader
            label="Product Category 03"
            title="Corporate Gifting Items"
            description="Office stationery, corporate kits, and promotional combinations built for events, employee kits, and branding."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORPORATE_TYPES.map((type) => (
              <div key={type} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
                  <GiftIcon />
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm">
                  {type}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="utility" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Product Category 04"
            title="Utility Products"
            description="Daily-use branded items for bulk gifting and promotional campaigns."
          />
          <div className="grid sm:grid-cols-3 gap-4">
            {UTILITY_TYPES.map((type) => (
              <div key={type} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <DropletIcon />
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm">
                  {type}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            label="Custom Manufacturing"
            title="What Can Be Customized"
            description="Most of our work involves customization based on business requirements. Logo to complete design — your specs, our execution."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMIZATION_OPTIONS.map((item) => (
              <div key={item.title} className="card">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">
                  <PaintbrushIcon />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Types */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Order Types"
            title="Types of Orders We Handle"
            align="center"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Fully Custom-Designed",
                desc: "Bags designed from scratch to your specifications. Material, size, structure, branding — all custom.",
              },
              {
                title: "Standard + Branding",
                desc: "Choose from our standard designs, add your logo and branding. Faster turnaround, lower setup cost.",
              },
              {
                title: "Corporate-Specific",
                desc: "Tailored solutions for corporate requirements — employee kits, event packages, branded combinations.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <h4 className="font-bold text-neutral-900 mb-2">
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

      {/* CTA */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Need Something Specific?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            Share your product requirements and we&apos;ll discuss options,
            materials, and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hi, I'd like to discuss custom bag manufacturing. Here are my requirements:\n\nProduct: \nQuantity: \nBranding needs: "
              label="Discuss Your Requirement"
              size="lg"
            />
            <Link href="/process" className="btn-outline border-neutral-600 text-white hover:border-brand-400 hover:text-brand-400">
              See How Orders Work
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
