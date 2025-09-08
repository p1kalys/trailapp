const StepBar = ({ steps = [], current = 0, completed = -1, className = "" }) => {
  const N = steps.length;
  const segCount = Math.max(N - 1, 0);

  const CLR_FILLED = "#d1d5db";
  const CLR_ACTIVE = "#CEFF66";
  const CLR_TODO   = "#50b8d2";

  const segColor = (i) => {
    if (i < current) return CLR_FILLED;
    if (i === current) return CLR_ACTIVE;
    return CLR_TODO;
  };

  return (
    <div className={className}>
      <div className="mb-2 grid" style={{ gridTemplateColumns: `repeat(${N},1fr)` }}>
        {steps.map((s) => (
          <div key={s.key} className="text-center text-sm font-century-bold font-medium text-primary">
            {s.label}
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-l-full" style={{ background: segCount ? segColor(0) : CLR_TODO }} />
          {Array.from({ length: segCount }).map((_, i) => (
            <div
              key={`seg-${i}`}
              className="h-2 flex-1"
              style={{ background: segColor(i) }}
            />
          ))}
          <div className="h-2 w-2 rounded-r-full" style={{ background: segCount ? segColor(segCount - 1) : CLR_TODO }} />
        </div>

        <div
          className="absolute inset-0 flex items-center justify-between"
          style={{ pointerEvents: "none" }}
        >
          {steps.map((s, i) => {
            let ring = CLR_TODO, bg = CLR_TODO;
            if (i <= completed) { ring = CLR_FILLED; bg = CLR_FILLED; }
            if (i === current && i > completed) { ring = CLR_ACTIVE; bg = CLR_ACTIVE; }
            return (
              <div
                key={`node-${s.key}`}
                className="h-4 w-4 rounded-full shadow-sm"
                style={{ backgroundColor: bg, boxShadow: `0 0 0 4px ${ring}` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepBar;
