import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { getWhatsAppHref } from "@/lib/links";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
  lg: "py-4 px-8 text-lg",
};

export default function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  className = "",
  size = "md",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={getWhatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 active:bg-green-800 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 min-h-12 ${sizeClasses[size]} ${className}`}
    >
      <WhatsAppIcon size={20} />
      {label}
    </Link>
  );
}
