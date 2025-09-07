import StatBadge from "../../common/StatBadge";
import { Shield, Star, ThumbsUp, TrendingUp } from "lucide-react";
import BackPill from "../../common/BackPill";
import CardsFeature from "./CardsFeature";
import FormFeature from "./FormFeature";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-3xl font-century-bold font-extrabold text-primary">
          Take Charge of Your Financial Journey
        </p>
        <span className="text-darkGray/70 font-century-bold">
          Find, compare, and choose the best financial products for you.
        </span>
      </div>
      <div className="w-[68%] mx-auto flex flex-row items-center justify-between text-center">
        <StatBadge icon={TrendingUp} value="$2.5B+" label="Loans Funded" />
        <StatBadge icon={ThumbsUp} value="500K+" label="Happy Customers" />
        <StatBadge icon={Star} value="4.9/5" label="Average Rating" />
        <StatBadge icon={Shield} value="15+" label="Years of Trust" />
      </div>
      <BackPill
        text={"Back to Loan Comparison"}
        onClick={() => console.log("clicked")}
        className="my-10"
      />
      <div className="w-[78%] mx-auto flex flex-row items-start justify-center text-center">
        <FormFeature />
        <CardsFeature />
      </div>
    </div>
  );
};

export default HeroSection;
