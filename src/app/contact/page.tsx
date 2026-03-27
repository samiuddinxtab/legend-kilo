import dynamic from "next/dynamic";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  PHONE_TEL,
} from "@/data/site";
import { getWhatsAppHref } from "@/lib/links";
import type { Metadata } from "next";

const InquiryWidget = dynamic(
  () => import("@/components/ui/InquiryWidget"),
  {
    loading: () => (
      <div className="card animate-pulse">
        <div className="h-7 bg-neutral-200 rounded w-3/4 mb-3" />
        <div className="h-4 bg-neutral-200 rounded w-full mb-6" />
        <div className="space-y-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="h-4 bg-neutral-200 rounded w-1/3 mb-2" />
              <div className="h-12 bg-neutral-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LEGEND INDUSTRIES for bulk bag manufacturing and corporate gifting. WhatsApp, email, or call. Hyderabad-based, PAN India supply.",
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-hero" className="bg-neutral-900 text-white">
        <div className="container-site section-padding">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">Get in Touch</span>
          <h1 id="contact-hero" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Contact <span className="text-brand-400">LEGEND INDUSTRIES</span>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            WhatsApp is the fastest way to reach us. Share your requirement and we&apos;ll respond during business hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <SectionHeader label="Reach Us" title="Contact Information" />
              <div className="space-y-6">
                <div className="card bg-green-50 border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0">
                      <WhatsAppIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">WhatsApp (Preferred)</h3>
                      <p className="text-sm text-neutral-600 mb-3">Fastest response. Pre-fill your requirement below or message directly.</p>
                      <WhatsAppButton
                        message="Hi, I'm interested in bulk manufacturing from LEGEND INDUSTRIES. Please share details."
                        label="Chat Now"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <PhoneIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Call</h3>
                      <p className="text-sm text-neutral-600 mb-1">Mon–Sat, 9 AM – 6 PM</p>
                      <a href={`tel:${PHONE_TEL}`} className="text-brand-500 font-semibold hover:text-brand-600 transition-colors">
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <MailIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
                      <p className="text-sm text-neutral-600 mb-1">For formal inquiries and documentation</p>
                      <a href={`mailto:${EMAIL_ADDRESS}`} className="text-brand-500 font-semibold hover:text-brand-600 transition-colors">
                        {EMAIL_ADDRESS}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <MapPinIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Location</h3>
                      <address className="not-italic text-sm text-neutral-600">
                        Hyderabad, Telangana, India
                        <br />
                        PAN India Supply
                      </address>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                      <ClockIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Business Hours</h3>
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

            <div className="lg:col-span-3">
              <InquiryWidget />
              <p className="text-xs text-neutral-500 mt-4 text-center">
                No account needed. No forms to fill repeatedly. Your details generate a pre-filled message you can send directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="inquiry-note" className="section-padding bg-neutral-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader label="Note" title="How We Handle Inquiries" align="center" />
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Response Time", desc: "We respond within business hours (Mon–Sat, 9 AM – 6 PM IST). WhatsApp gets the fastest response." },
                { title: "No Spam", desc: "We don't send marketing emails or unsolicited messages. Your information stays confidential." },
                { title: "Best Fit First", desc: "We'll confirm if your requirement matches our capabilities before discussing pricing. No wasted time." },
              ].map((item) => (
                <div key={item.title} className="card text-center">
                  <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
