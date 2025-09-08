const StatBadge = ({ icon, value, label }) => {
  const Icon = icon;
  return (
    <div className="inline-flex flex-col items-center gap-2 text-center">
      <div className="grid place-items-center h-12 w-12 rounded-full bg-primary shadow-md">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>

      <div className="text-lg font-century-bold text-azure tracking-wide">
        {value}
      </div>

      <div className="text-sm font-century-bold text-darkGray/80">{label}</div>
    </div>
  );
};

export default StatBadge;
