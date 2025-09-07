import { Star } from "lucide-react";

export const Stars = ({ count = 5, className = "" }) => (
  <div className={`flex items-center gap-1 text-amber-400 ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
    ))}
  </div>
);