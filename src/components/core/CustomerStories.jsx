import CardShell from "../common/CardShell";
import { Sparkle, Star } from "lucide-react";
import { Stars } from "../common/Stars";

const stories = [
  {
    quote:
      "Got approved for my business loan in just 2 hours. The process was incredibly smooth!",
    name: "Sarah Johnson",
    role: "Small Business Owner",
    stars: 5,
  },
  {
    quote:
      "Found the perfect personal loan rate. Saved over $2,000 compared to my bank’s offer.",
    name: "Michael Chen",
    role: "Teacher",
    stars: 5,
  },
  {
    quote:
      "The student loan refinancing options helped me reduce my monthly payments significantly.",
    name: "Emily Rodriguez",
    role: "Recent Graduate",
    stars: 5,
  },
];

const CustomerStories = () => {
  return (
    <CardShell>
      <div className="mb-5 flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center text-amber-400">
          <Star className="h-4 w-4 mb-2" aria-hidden="true" />
        </span>
        <h2 className="text-lg font-century-bold text-primary">
          Customer Stories
        </h2>
      </div>

      <ul className="space-y-6">
        {stories.map((item, idx) => (
          <li key={item.key ?? idx} className="flex gap-3">
            <div className="mt-1 w-1 shrink-0 rounded-full bg-blue-500" />
            <div className="flex-1">
              <Stars count={item.stars ?? 5} />
              <blockquote className="mt-2 text-sm font-century-regular text-left text-darkGray/80">
                “{item.quote}”
              </blockquote>
              <div className="mt-3">
                <div className="text-sm text-left font-century-bold font-medium text-darkGray">
                  {item.name}
                </div>
                {item.role ? (
                  <div className="text-xs text-left font-century-regular text-darkGray/70">{item.role}</div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CardShell>
  );
};

export default CustomerStories;
