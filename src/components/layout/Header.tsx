"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/process", label: "Process" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-neutral-900 hover:text-brand-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-brand-500">LEGEND</span>
            <span className="text-neutral-400 font-normal text-sm hidden sm:inline">
              INDUSTRIES
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-brand-500 rounded-lg hover:bg-brand-50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 btn-primary text-sm py-2 px-5"
            >
              Get Quote
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors min-h-11 min-w-11 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 pt-2 border-t border-neutral-100">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-neutral-700 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
