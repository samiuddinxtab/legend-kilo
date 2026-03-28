import { describe, expect, it } from "vitest";
import { getDefaultInquiryMessage, getEmailHref, getWhatsAppHref } from "@/utils/links";

describe("utils/links", () => {
  it("builds a WhatsApp URL with encoded message", () => {
    const href = getWhatsAppHref("Hello World");
    expect(href).toContain("wa.me/919052088880");
    expect(href).toContain("Hello%20World");
  });

  it("builds an email URL with encoded subject/body", () => {
    const href = getEmailHref("Test Subject", "Test Body");
    expect(href).toContain("mailto:legendindustries92@gmail.com");
    expect(href).toContain("Test%20Subject");
    expect(href).toContain("Test%20Body");
  });

  it("builds the default inquiry message with provided fields", () => {
    const message = getDefaultInquiryMessage({
      company: "Acme Corp",
      product: "Custom Bags",
      quantity: "500 units",
      details: "Logo printing",
    });

    expect(message).toContain("Acme Corp");
    expect(message).toContain("Custom Bags");
    expect(message).toContain("500 units");
    expect(message).toContain("Logo printing");
  });

  it("uses placeholders when inquiry fields are empty", () => {
    const message = getDefaultInquiryMessage({
      company: "",
      product: "",
      quantity: "",
      details: "",
    });

    expect(message).toContain("[Your Company]");
    expect(message).toContain("[Product Category]");
    expect(message).toContain("[Approx. Quantity]");
    expect(message).toContain("[Any specific requirements]");
  });
});
