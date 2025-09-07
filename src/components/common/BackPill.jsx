import { ArrowLeft } from "lucide-react";

const BackPill = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative group inline-flex items-center gap-3 rounded-lg bg-lightGrey pl-14 pr-5 py-2 text-darkGray shadow-sm ring-1 ring-black/5 transition hover:bg-lightGrey/80 hover:shadow-md ${className}`}
    >
      <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-limeGreen shadow">
        <ArrowLeft className="h-8 w-8 text-white transition" />
      </span>
      <span className="text-sm font-medium tracking-wide">{text}</span>
    </button>
  );
};

export default BackPill;
