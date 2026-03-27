import Link from "next/link";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";
import {
  FOOTER_LINKS,
  PRODUCT_LINKS,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  PHONE_TEL,
  PHONE_NUMBER,
} from "@/data/site";
import { getWhatsAppHref } from "@/lib/links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-neutral-900 text-neutral-300">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-bold text-xl text-white mb-4"
              aria-label="LEGEND INDUSTRIES — Home"
            >
              <span className="text-brand-400">LEGEND</span>{" "}
              <span className="text-neutral-400 font-normal text-sm">
                INDUSTRIES
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Hyderabad-based bag manufacturing and corporate gifting since
              1998. Bulk production, custom branding, PAN India supply.
            </p>
            <a
              href={getWhatsAppHref(
                "Hi, I'm interested in bulk bag manufacturing from LEGEND INDUSTRIES. Please share details."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2 px-4"
              aria-label="Contact us on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon size={18} />
                <span className="text-sm text-neutral-400">
                  Hyderabad, Telangana
                  <br />
                  India — PAN India Supply
                </span>
              </div>
              <div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                >
                  <PhoneIcon size={18} />
                  {PHONE_NUMBER}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-3 text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                >
                  <MailIcon size={18} />
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} LEGEND INDUSTRIES. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Bag Manufacturing &middot; Corporate Gifting &middot; Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
