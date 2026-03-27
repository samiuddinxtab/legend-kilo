"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-500 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="container-site">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-neutral-900 hover:text-brand-500 transition-colors"
            onClick={closeMenu}
            aria-label="LEGEND INDUSTRIES — Home"
          >
            <span className="text-brand-500">LEGEND</span>
            <span className="text-neutral-500 font-normal text-sm hidden sm:inline">
              INDUSTRIES
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
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
            aria-controls="mobile-nav"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden pb-6 pt-2 border-t border-neutral-100"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-neutral-700 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center"
                  onClick={closeMenu}
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
