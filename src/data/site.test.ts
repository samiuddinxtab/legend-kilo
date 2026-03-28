import { describe, it, expect } from "vitest";
import {
  NAV_ITEMS,
  CAPABILITIES,
  FAQS,
  PROCESS_STEPS,
  QUALIFICATION_POINTS,
  NOT_A_FIT,
  WHATSAPP_NUMBER,
  EMAIL_ADDRESS,
  BAG_TYPES,
  ECO_TYPES,
  CORPORATE_TYPES,
  UTILITY_TYPES,
  CUSTOMIZATION_OPTIONS,
  PRODUCT_OPTIONS,
  QUANTITY_OPTIONS,
} from "@/data/site";

describe("data/site", () => {
  describe("NAV_ITEMS", () => {
    it("has 6 items", () => {
      expect(NAV_ITEMS).toHaveLength(6);
    });

    it("starts with Home and includes Blog before Contact", () => {
      expect(NAV_ITEMS[0].href).toBe("/");
      expect(NAV_ITEMS[4].href).toBe("/blog");
      expect(NAV_ITEMS[5].href).toBe("/contact");
    });

    it("all items have href and label", () => {
      NAV_ITEMS.forEach((item) => {
        expect(item.href).toBeTruthy();
        expect(item.label).toBeTruthy();
      });
    });
  });

  describe("CAPABILITIES", () => {
    it("has 4 items", () => {
      expect(CAPABILITIES).toHaveLength(4);
    });

    it("all items have icon, title, and desc", () => {
      CAPABILITIES.forEach((item) => {
        expect(item.icon).toBeTruthy();
        expect(item.title).toBeTruthy();
        expect(item.desc).toBeTruthy();
      });
    });
  });

  describe("FAQS", () => {
    it("has 8 FAQs", () => {
      expect(FAQS).toHaveLength(8);
    });

    it("all FAQs have question and answer", () => {
      FAQS.forEach((faq) => {
        expect(faq.q).toBeTruthy();
        expect(faq.a).toBeTruthy();
      });
    });
  });

  describe("PROCESS_STEPS", () => {
    it("has 5 steps", () => {
      expect(PROCESS_STEPS).toHaveLength(5);
    });

    it("steps are numbered 01 through 05", () => {
      PROCESS_STEPS.forEach((step, i) => {
        expect(step.num).toBe(String(i + 1).padStart(2, "0"));
      });
    });

    it("all steps have required fields", () => {
      PROCESS_STEPS.forEach((step) => {
        expect(step.icon).toBeTruthy();
        expect(step.title).toBeTruthy();
        expect(step.desc).toBeTruthy();
        expect(step.details.length).toBeGreaterThan(0);
      });
    });
  });

  describe("qualification data", () => {
    it("QUALIFICATION_POINTS has 5 items", () => {
      expect(QUALIFICATION_POINTS).toHaveLength(5);
    });

    it("NOT_A_FIT has 4 items", () => {
      expect(NOT_A_FIT).toHaveLength(4);
    });
  });

  describe("product data", () => {
    it("BAG_TYPES has items", () => {
      expect(BAG_TYPES.length).toBeGreaterThan(0);
    });

    it("ECO_TYPES has items", () => {
      expect(ECO_TYPES.length).toBeGreaterThan(0);
    });

    it("CORPORATE_TYPES has items", () => {
      expect(CORPORATE_TYPES.length).toBeGreaterThan(0);
    });

    it("UTILITY_TYPES has items", () => {
      expect(UTILITY_TYPES.length).toBeGreaterThan(0);
    });

    it("CUSTOMIZATION_OPTIONS has 5 items", () => {
      expect(CUSTOMIZATION_OPTIONS).toHaveLength(5);
    });

    it("PRODUCT_OPTIONS has 5 items", () => {
      expect(PRODUCT_OPTIONS).toHaveLength(5);
    });

    it("QUANTITY_OPTIONS has 5 items", () => {
      expect(QUANTITY_OPTIONS).toHaveLength(5);
    });
  });

  describe("contact constants", () => {
    it("WHATSAPP_NUMBER is a numeric string", () => {
      expect(WHATSAPP_NUMBER).toMatch(/^\d+$/);
    });

    it("EMAIL_ADDRESS contains @", () => {
      expect(EMAIL_ADDRESS).toContain("@");
    });
  });
});
