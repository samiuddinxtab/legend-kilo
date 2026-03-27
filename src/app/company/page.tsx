import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description:
    "LEGEND INDUSTRIES — Hyderabad-based bag manufacturing since 1998. Dedicated production unit for bulk bag manufacturing and corporate supply. PAN India delivery.",
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

function CheckIcon() {
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
      className="text-brand-500 shrink-0"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const CLIENT_TYPES = [
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
];

const WHY_CHOOSE = [
  "Consistent production quality across every order",
  "Reliable delivery timelines — 1 to 3 weeks",
  "Strong experience in custom and bulk orders",
  "Direct factory-level manufacturing",
  "Suitable for repeat and long-term business",
  "PAN India supply capability",
  "Full customization — logo to complete design",
  "Structured quality checks before dispatch",
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            LEGEND <span className="text-brand-400">INDUSTRIES</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Hyderabad-based bag manufacturing and corporate gifting company
            established in 1998. Built for execution, not retail display.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Our Story"
                title="25+ Years of Reliable Manufacturing"
              />
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  LEGEND INDUSTRIES was established in 1998 in Hyderabad,
                  Telangana. From the beginning, our focus has been on bulk bag
                  manufacturing and corporate supply — not retail, not
                  one-off sales.
                </p>
                <p>
                  We operate a dedicated production unit designed for medium to
                  large quantity orders. Our infrastructure, processes, and team
                  are built around reliable production, consistent quality, and
                  on-time delivery.
                </p>
                <p>
                  Over the years, we have worked with corporate clients,
                  distributors, institutions, and marketing agencies across
                  India. Our focus remains on execution quality and building
                  long-term business relationships.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1998", label: "Established" },
                { value: "25+", label: "Years Active" },
                { value: "PAN", label: "India Supply" },
                { value: "100%", label: "Bulk Focus" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <div className="text-3xl font-bold text-brand-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Our Clients"
            title="Who We Work With"
            description="We typically work with businesses requiring consistent supply, corporate clients with branding needs, and distributors handling volume sales."
            align="center"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CLIENT_TYPES.map((item) => (
              <div key={item.title} className="card">
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

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Our Strength"
                title="Why Businesses Choose Us"
              />
              <ul className="space-y-3">
                {WHY_CHOOSE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
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

      {/* Production & Delivery */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <SectionHeader
            label="Operations"
            title="Production & Delivery"
            align="center"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Production Capacity",
                desc: "Structured for medium to large quantity orders. Consistent capacity aligned for bulk and repeat business.",
              },
              {
                title: "Quality Checks",
                desc: "Structured quality inspection at multiple stages — raw material, production, and pre-dispatch.",
              },
              {
                title: "Delivery",
                desc: "1–3 week typical timeline. PAN India delivery. Committed timelines discussed and confirmed during order process.",
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
            Work With Us
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            If you&apos;re looking for long-term supply or bulk production,
            we&apos;re the right partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hi, I'd like to discuss a long-term bulk supply arrangement with LEGEND INDUSTRIES."
              label="Connect on WhatsApp"
              size="lg"
            />
            <Link
              href="/capabilities"
              className="btn-outline border-neutral-600 text-white hover:border-brand-400 hover:text-brand-400"
            >
              View Our Capabilities
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
