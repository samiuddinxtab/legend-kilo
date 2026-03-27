import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { renderIcon } from "@/lib/render-icon";
import { PROCESS_STEPS } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How bulk orders work at LEGEND INDUSTRIES. Simple, structured process from requirement sharing to delivery. 1–3 week production timelines.",
};

export default function ProcessPage() {
  return (
    <>
      <section aria-labelledby="process-hero" className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">How It Works</span>
          <h1 id="process-hero" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Simple, Structured <span className="text-brand-400">Process</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            No confusion, no unnecessary back-and-forth. Share your requirement, we handle the rest. Here&apos;s exactly how orders work at LEGEND INDUSTRIES.
          </p>
        </div>
      </section>

      <section aria-labelledby="steps-heading" className="section-padding">
        <div className="container-site">
          <h2 id="steps-heading" className="sr-only">Order Process Steps</h2>
          <ol className="space-y-0 list-none p-0 m-0">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.num} className="relative grid md:grid-cols-[80px_1fr] gap-6 md:gap-8 pb-12 last:pb-0">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 bottom-0 w-px bg-neutral-200" aria-hidden="true" />
                )}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-20 h-20 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center relative">
                    {renderIcon(step.icon)}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center" aria-hidden="true">
                      {step.num}
                    </span>
                  </div>
                </div>
                <article className="card">
                  <span className="section-label mb-2 block">Step {step.num}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-5">{step.desc}</p>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">What Happens</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckIcon className="text-brand-500 shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="timeline-heading" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader label="Timelines" title="What to Expect" align="center" />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Initial Response", time: "Same business day", desc: "We respond to inquiries during business hours (Mon–Sat, 9 AM – 6 PM)." },
              { title: "Quote & Discussion", time: "1–2 business days", desc: "Detailed discussion on options, pricing, and timelines after understanding your requirement." },
              { title: "Production & Delivery", time: "1–3 weeks", desc: "Depends on order size and customization. Exact timeline confirmed before production starts." },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-2xl font-bold text-brand-500 mb-1">{item.time}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="prep-heading" className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader label="Be Prepared" title="What We Need From You" description="The more details you share upfront, the faster we can give you accurate options and pricing." />
              <ul className="space-y-4">
                {["Company or organization name", "Product type and category", "Approximate quantity", "Logo or branding requirements", "Any material or size preferences", "Timeline or deadline (if any)"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-700">
                    <CheckIcon className="text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-neutral-900 text-white border-neutral-800">
              <h3 className="text-xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Share your requirement via WhatsApp or email. We&apos;ll respond with options and next steps during business hours.
              </p>
              <div className="flex flex-col gap-3">
                <WhatsAppButton
                  message="Hi, I'd like to start a bulk order discussion.\n\nCompany: \nProduct: \nQuantity: \nBranding: "
                  label="Start on WhatsApp"
                />
                <Link href="/contact" className="btn-outline border-neutral-600 text-white hover:border-brand-400 hover:text-brand-400">
                  View All Contact Options <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
