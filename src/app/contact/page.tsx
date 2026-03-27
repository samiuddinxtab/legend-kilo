import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton, {
  WHATSAPP_NUMBER,
} from "@/components/ui/WhatsAppButton";
import InquiryWidget from "@/components/ui/InquiryWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LEGEND INDUSTRIES for bulk bag manufacturing and corporate gifting. WhatsApp, email, or call. Hyderabad-based, PAN India supply.",
};

function PhoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const EMAIL = "info@legendindustries.in";
const PHONE = "+91 98765 43210";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Contact <span className="text-brand-400">LEGEND INDUSTRIES</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            WhatsApp is the fastest way to reach us. Share your requirement and
            we&apos;ll respond during business hours.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeader
                label="Reach Us"
                title="Contact Information"
              />
              <div className="space-y-6">
                {/* WhatsApp - Primary */}
                <div className="card bg-green-50 border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">
                        WhatsApp (Preferred)
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Fastest response. Pre-fill your requirement below or
                        message directly.
                      </p>
                      <WhatsAppButton
                        message="Hi, I'm interested in bulk manufacturing from LEGEND INDUSTRIES. Please share details."
                        label="Chat Now"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Call</h3>
                      <p className="text-sm text-neutral-600 mb-1">
                        Mon–Sat, 9 AM – 6 PM
                      </p>
                      <a
                        href={`tel:${PHONE.replace(/\s/g, "")}`}
                        className="text-brand-500 font-semibold hover:text-brand-600 transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <MailIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
                      <p className="text-sm text-neutral-600 mb-1">
                        For formal inquiries and documentation
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-brand-500 font-semibold hover:text-brand-600 transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <MapPinIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">
                        Location
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Hyderabad, Telangana, India
                        <br />
                        PAN India Supply
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <ClockIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Monday – Saturday
                        <br />
                        9:00 AM – 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Widget */}
            <div className="lg:col-span-3">
              <InquiryWidget />
              <p className="text-xs text-neutral-400 mt-4 text-center">
                No account needed. No forms to fill repeatedly. Your details
                generate a pre-filled message you can send directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding bg-neutral-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              label="Note"
              title="How We Handle Inquiries"
              align="center"
            />
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Response Time",
                  desc: "We respond within business hours (Mon–Sat, 9 AM – 6 PM IST). WhatsApp gets the fastest response.",
                },
                {
                  title: "No Spam",
                  desc: "We don't send marketing emails or unsolicited messages. Your information stays confidential.",
                },
                {
                  title: "Best Fit First",
                  desc: "We'll confirm if your requirement matches our capabilities before discussing pricing. No wasted time.",
                },
              ].map((item) => (
                <div key={item.title} className="card text-center">
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
        </div>
      </section>
    </>
  );
}
