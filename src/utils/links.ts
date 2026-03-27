import { WHATSAPP_NUMBER, EMAIL_ADDRESS } from "../data/site";

export function getWhatsAppHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getEmailHref(subject: string, body: string): string {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getDefaultInquiryMessage(fields: {
  company: string;
  product: string;
  quantity: string;
  details: string;
}): string {
  return `Hi LEGEND INDUSTRIES team, I need a bulk manufacturing quote.

Company: ${fields.company || "[Your Company]"}
Category: ${fields.product || "[Product Category]"}
Estimated Quantity: ${fields.quantity || "[Approx. Quantity]"}
Branding Required: [Logo print / embroidery / other]
Delivery Location: [City, State]
Expected Delivery Date: [DD/MM/YYYY]
Additional Details: ${fields.details || "[Any specific requirements]"}

Please share MOQ, pricing slabs, sampling process, and dispatch timeline.`;
}