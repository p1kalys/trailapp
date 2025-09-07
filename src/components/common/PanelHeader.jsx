import { User } from "lucide-react";

const PanelHeader = ({ active }) => {
    const HeaderIcon = active.icon || User;
  return (
    <div className="flex items-start py-0.5 justify-between px-5 bg-gradient-to-r from-azure/10 to-limeGreen/10">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center text-blue-500">
          <HeaderIcon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-primary">{active.label}</h3>
      </div>
    </div>
  );
};

export default PanelHeader;
