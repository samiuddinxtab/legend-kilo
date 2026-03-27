import { StarIcon } from "@/components/icons";

interface TestimonialCardProps {
  quote: string;
  name: string;
  subtitle: string;
}

export default function TestimonialCard({
  quote,
  name,
  subtitle,
}: TestimonialCardProps) {
  return (
    <figure className="card bg-neutral-900 text-white border-neutral-800">
      <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-neutral-200 leading-relaxed mb-6 text-sm">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption>
        <div className="font-semibold text-white text-sm">{name}</div>
        <div className="text-neutral-400 text-xs">{subtitle}</div>
      </figcaption>
    </figure>
  );
}
