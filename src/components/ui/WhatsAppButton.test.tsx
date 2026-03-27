import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getWhatsAppHref, getEmailHref, getDefaultInquiryMessage } from "@/lib/links";

describe("WhatsAppButton", () => {
  it("renders with default label", () => {
    render(<WhatsAppButton message="Hello" />);
    const link = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(link).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<WhatsAppButton message="Hello" label="Quick Chat" />);
    expect(screen.getByRole("link", { name: /quick chat/i })).toBeInTheDocument();
  });

  it("generates correct WhatsApp URL", () => {
    render(<WhatsAppButton message="Test message" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", expect.stringContaining("wa.me/919052088880"));
    expect(link).toHaveAttribute("href", expect.stringContaining(encodeURIComponent("Test message")));
  });

  it("opens in new tab with security attributes", () => {
    render(<WhatsAppButton message="Hello" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies size classes", () => {
    const { container } = render(<WhatsAppButton message="Hello" size="lg" />);
    expect(container.querySelector("a")).toHaveClass("py-4", "px-8", "text-lg");
  });

  it("applies custom className", () => {
    const { container } = render(
      <WhatsAppButton message="Hello" className="extra-class" />
    );
    expect(container.querySelector("a")).toHaveClass("extra-class");
  });
});

describe("links utility", () => {
  it("getWhatsAppHref encodes message", () => {
    const href = getWhatsAppHref("Hello World");
    expect(href).toContain("wa.me/919052088880");
    expect(href).toContain("Hello%20World");
  });

  it("getEmailHref generates mailto link", () => {
    const href = getEmailHref("Test Subject", "Test Body");
    expect(href).toContain("mailto:legendindustries92@gmail.com");
    expect(href).toContain("Test%20Subject");
    expect(href).toContain("Test%20Body");
  });

  it("getDefaultInquiryMessage includes all fields", () => {
    const msg = getDefaultInquiryMessage({
      company: "Acme Corp",
      product: "Custom Bags",
      quantity: "500 units",
      details: "Logo printing",
    });
    expect(msg).toContain("Acme Corp");
    expect(msg).toContain("Custom Bags");
    expect(msg).toContain("500 units");
    expect(msg).toContain("Logo printing");
  });

  it("getDefaultInquiryMessage uses placeholders for empty fields", () => {
    const msg = getDefaultInquiryMessage({
      company: "",
      product: "",
      quantity: "",
      details: "",
    });
    expect(msg).toContain("[Your Company]");
    expect(msg).toContain("[Product Category]");
    expect(msg).toContain("[Approx. Quantity]");
  });
});
