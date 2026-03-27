"use client";

import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

const PRODUCT_OPTIONS = [
  "Custom Bags (Travel, Duffle, Laptop, School)",
  "Jute & Cotton Eco Bags",
  "Corporate Gifting Items",
  "Utility Products (Water Bottles, etc.)",
  "Multiple Categories",
];

const QUANTITY_OPTIONS = [
  "100–500 units",
  "500–1,000 units",
  "1,000–5,000 units",
  "5,000+ units",
  "Not sure yet",
];

const EMAIL_ADDRESS = "info@legendindustries.in";

function MailIcon() {
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
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function InquiryWidget() {
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");

  const message = `Hi, I'm interested in bulk manufacturing from LEGEND INDUSTRIES.

Company: ${company || "[Your Company]"}
Product: ${product || "[Product Category]"}
Quantity: ${quantity || "[Approx. Quantity]"}
Details: ${details || "[Any specific requirements]"}

Please share details on pricing and timelines.`;

  const emailSubject = encodeURIComponent(
    `Bulk Inquiry — ${product || "Bag Manufacturing"} | ${company || "Corporate"}`
  );
  const emailBody = encodeURIComponent(message);
  const emailHref = `mailto:${EMAIL_ADDRESS}?subject=${emailSubject}&body=${emailBody}`;

  const isValid = company.trim() && product && quantity;

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-neutral-900 mb-2">
        Share Your Requirement
      </h3>
      <p className="text-sm text-neutral-500 mb-6">
        Fill in the details below. We&apos;ll send a pre-filled message via
        WhatsApp or email — no forms, no waiting.
      </p>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="inquiry-company"
            className="block text-sm font-medium text-neutral-700 mb-1.5"
          >
            Company / Organization Name *
          </label>
          <input
            id="inquiry-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. ABC Corp Pvt Ltd"
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="inquiry-product"
            className="block text-sm font-medium text-neutral-700 mb-1.5"
          >
            Product Category *
          </label>
          <select
            id="inquiry-product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors appearance-none"
          >
            <option value="">Select a category</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="inquiry-quantity"
            className="block text-sm font-medium text-neutral-700 mb-1.5"
          >
            Approximate Quantity *
          </label>
          <select
            id="inquiry-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors appearance-none"
          >
            <option value="">Select quantity range</option>
            {QUANTITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="inquiry-details"
            className="block text-sm font-medium text-neutral-700 mb-1.5"
          >
            Additional Details (optional)
          </label>
          <textarea
            id="inquiry-details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g. Logo printing, specific materials, delivery timeline"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <WhatsAppButton
          message={message}
          label="Send via WhatsApp"
          className={`flex-1 ${!isValid ? "opacity-50 pointer-events-none" : ""}`}
        />
        <a
          href={emailHref}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-300 text-neutral-800 font-semibold rounded-lg hover:border-brand-500 hover:text-brand-500 active:bg-neutral-100 transition-all duration-200 min-h-12 flex-1 ${
            !isValid ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <MailIcon />
          Send via Email
        </a>
      </div>

      {!isValid && (
        <p className="text-xs text-neutral-400 mt-3 text-center">
          Please fill in company name, product category, and quantity to proceed.
        </p>
      )}
    </div>
  );
}
