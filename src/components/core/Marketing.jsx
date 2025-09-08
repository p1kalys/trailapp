import {
  CircleCheckBig,
  Clock3,
  Lock,
  Shield,
  TrendingUp,
} from "lucide-react";
import CardShell from "../common/CardShell";

const features = [
  {
    icon: Shield,
    title: "Bank‑Level Security",
    desc: "Your data is protected with 256‑bit encryption and multi‑factor authentication",
  },
  {
    icon: Clock3,
    title: "Fast Approval",
    desc: "Get pre‑approved in minutes with our streamlined application process",
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    desc: "Access competitive rates from top lenders nationwide",
  },
  {
    icon: CircleCheckBig,
    title: "No Hidden Fees",
    desc: "Transparent pricing with no origination fees or prepayment penalties",
  },
];

const Marketing = () => {
  return (
    <CardShell>
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md text-blue-500">
          <Lock className="h-4 w-4 mb-2" aria-hidden="true" />
        </span>
        <h2 className="text-lg font-century-bold text-primary">
          Why Choose Us?
        </h2>
      </div>

      <ul className="space-y-5">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li
              key={item.key ?? item.title ?? idx}
              className="flex items-start gap-2"
            >
              <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-white shadow-sm">
                {Icon ? <Icon className="h-8 w-8" aria-hidden="true" /> : null}
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-sm text-left font-century-regular text-darkGray font-medium">
                  {item.title}
                </h3>
                <span className="text-xs text-left font-century-regular text-darkGray/80">
                  {item.desc}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </CardShell>
  );
};

export default Marketing;
