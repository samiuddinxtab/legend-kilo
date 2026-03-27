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
  return `Hi, I'm interested in bulk manufacturing from LEGEND INDUSTRIES.

Company: ${fields.company || "[Your Company]"}
Product: ${fields.product || "[Product Category]"}
Quantity: ${fields.quantity || "[Approx. Quantity]"}
Details: ${fields.details || "[Any specific requirements]"}

Please share details on pricing and timelines.`;
}