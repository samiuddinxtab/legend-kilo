import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TestimonialCard from "@/components/ui/TestimonialCard";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
} from "@/components/icons";
import { renderIcon } from "@/lib/render-icon";
import {
  CAPABILITIES,
  QUALIFICATION_POINTS,
  NOT_A_FIT,
  FAQS,
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
              Bulk Bag Manufacturing &middot; Since 1998
            </span>
            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
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
      <section aria-labelledby="qualification-heading" className="section-padding bg-brand-50 border-y border-brand-100">
        <div className="container-site">
          <SectionHeader
            label="Before You Proceed"
            title="Is LEGEND INDUSTRIES Right for You?"
            description="We focus on bulk manufacturing and corporate supply. Not every inquiry is the right fit — and that's intentional."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-neutral-200">
              <h3 id="qualification-heading" className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircleIcon className="text-green-600" />
                You&apos;re a good fit if:
              </h3>
              <ul className="space-y-3">
                {QUALIFICATION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircleIcon className="text-green-600 shrink-0 mt-0.5" />
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
                    <XCircleIcon className="text-neutral-400 shrink-0 mt-0.5" />
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
      <section aria-labelledby="capabilities-heading" className="section-padding">
        <div className="container-site">
          <SectionHeader
            label="What We Do"
            title="Manufacturing That Delivers"
            description="Custom bags, corporate gifting, and utility products — all produced in bulk with full branding support."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {CAPABILITIES.map((item) => (
              <article key={item.title} className="card">
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </article>
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
      <section aria-labelledby="process-heading" className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="How It Works"
            title="Simple, Structured Process"
            description="No confusion. Share your requirement, we handle the rest."
            align="center"
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 list-none p-0 m-0">
            {[
              { step: "01", title: "Share Requirement", desc: "Product type, quantity, branding needs via WhatsApp or email." },
              { step: "02", title: "Discuss Options", desc: "We review and discuss material, design, and pricing options." },
              { step: "03", title: "Sample / Approval", desc: "Design or sample approval before production begins." },
              { step: "04", title: "Production", desc: "Bulk manufacturing with quality checks at every stage." },
              { step: "05", title: "Delivery", desc: "Dispatched within committed 1–3 week timeline." },
            ].map((item, index) => (
              <li key={item.step} className="text-center relative">
                <div
                  className="w-12 h-12 rounded-full bg-brand-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  {item.step}
                </div>
                <h4 className="font-semibold text-neutral-900 mb-1">
                  <span className="sr-only">Step {item.step}: </span>
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
                {index < 4 && (
                  <div className="hidden lg:block mt-4" aria-hidden="true">
                    <ArrowRightIcon className="text-neutral-300 mx-auto" size={24} />
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link href="/process" className="btn-outline">
              View Full Process
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section aria-labelledby="credibility-heading" className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Since 1998</span>
              <h2 id="credibility-heading" className="section-title mt-3 mb-4">
                25+ Years of Reliable Manufacturing
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                LEGEND INDUSTRIES has been producing bags and corporate products
                from Hyderabad since 1998. Our focus has always been on
                execution quality, reliable timelines, and building long-term
                business relationships.
              </p>
              <dl className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "25+", label: "Years" },
                  { value: "PAN", label: "India Supply" },
                  { value: "100%", label: "Custom Focus" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <dt className="text-2xl sm:text-3xl font-bold text-brand-500">
                      {stat.value}
                    </dt>
                    <dd className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link href="/company" className="btn-outline">
                Learn More About Us
                <ArrowRightIcon />
              </Link>
            </div>
            <TestimonialCard
              quote="Vast variety to choose from — Impeccable Quality at a very reasonable Pricing. Delivered at a Short notice. Thanks. Genuinely recommended."
              name="Dr. Khizer Hussain Junaidy"
              subtitle="Local Guide · 77 reviews"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="section-padding bg-neutral-100">
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
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-neutral-900 hover:text-brand-500 transition-colors min-h-12">
                  {faq.q}
                  <ChevronDownIcon className="text-neutral-400 group-open:rotate-180 transition-transform shrink-0" />
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
      <section aria-labelledby="cta-heading" className="section-padding bg-neutral-900 text-white">
        <div className="container-site text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
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
