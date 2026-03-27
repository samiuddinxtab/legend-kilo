import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  ArrowRightIcon,
  CheckIcon,
  LeafIcon,
  GiftIcon,
  DropletIcon,
  BackpackIcon,
  PaintbrushIcon,
} from "@/components/icons";
import {
  BAG_TYPES,
  ECO_TYPES,
  CORPORATE_TYPES,
  UTILITY_TYPES,
  CUSTOMIZATION_OPTIONS,
} from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Custom bags, jute & cotton eco bags, corporate gifting items, and utility products. Full customization with logo printing, material selection, and bulk production.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section aria-labelledby="cap-hero" className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
            Products & Services
          </span>
          <h1 id="cap-hero" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            What We <span className="text-brand-400">Manufacture</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Custom bags, eco-friendly options, corporate gifting items, and
            utility products — all manufactured in bulk with full customization support.
          </p>
        </div>
      </section>

      <section id="bags" aria-labelledby="bags-heading" className="section-padding">
        <div className="container-site">
          <SectionHeader label="Product Category 01" title="Custom Bags" description="Designed for bulk production with custom branding. Travel, duffle, laptop, school, drawstring, and promotional bags." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-16 h-16 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5">
                <BackpackIcon />
              </div>
              <h2 id="bags-heading" className="text-xl font-bold text-neutral-900 mb-4">Bag Types</h2>
              <ul className="grid grid-cols-2 gap-3">
                {BAG_TYPES.map((type) => (
                  <li key={type} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckIcon className="text-brand-500 shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-900 text-white rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-4">Best Suited For</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                {["Corporate employee kits and welcome packages", "Event and promotional campaigns", "Distributor and wholesale supply", "Institutional requirements (schools, colleges)"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="text-brand-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="eco" aria-labelledby="eco-heading" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader label="Product Category 02" title="Jute & Cotton Eco Bags" description="Eco-friendly bags suitable for corporate gifting and sustainable branding initiatives." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ECO_TYPES.map((type) => (
              <div key={type} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <LeafIcon />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate" aria-labelledby="corporate-heading" className="section-padding">
        <div className="container-site">
          <SectionHeader label="Product Category 03" title="Corporate Gifting Items" description="Office stationery, corporate kits, and promotional combinations built for events, employee kits, and branding." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORPORATE_TYPES.map((type) => (
              <div key={type} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
                  <GiftIcon />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="utility" aria-labelledby="utility-heading" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader label="Product Category 04" title="Utility Products" description="Daily-use branded items for bulk gifting and promotional campaigns." />
          <div className="grid sm:grid-cols-3 gap-4">
            {UTILITY_TYPES.map((type) => (
              <div key={type} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <DropletIcon />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="custom-heading" className="section-padding">
        <div className="container-site">
          <SectionHeader label="Custom Manufacturing" title="What Can Be Customized" description="Most of our work involves customization based on business requirements. Logo to complete design — your specs, our execution." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMIZATION_OPTIONS.map((item) => (
              <div key={item.title} className="card">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">
                  <PaintbrushIcon />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="order-types-heading" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader label="Order Types" title="Types of Orders We Handle" align="center" />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Fully Custom-Designed", desc: "Bags designed from scratch to your specifications. Material, size, structure, branding — all custom." },
              { title: "Standard + Branding", desc: "Choose from our standard designs, add your logo and branding. Faster turnaround, lower setup cost." },
              { title: "Corporate-Specific", desc: "Tailored solutions for corporate requirements — employee kits, event packages, branded combinations." },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cap-cta" className="section-padding bg-neutral-900 text-white">
        <div className="container-site text-center">
          <h2 id="cap-cta" className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Need Something Specific?</h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">Share your product requirements and we&apos;ll discuss options, materials, and pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton message="Hi, I'd like to discuss custom bag manufacturing. Here are my requirements:\n\nProduct: \nQuantity: \nBranding needs: " label="Discuss Your Requirement" size="lg" />
            <Link href="/process" className="btn-outline border-neutral-600 text-white hover:border-brand-400 hover:text-brand-400">
              See How Orders Work <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
