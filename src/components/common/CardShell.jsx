const CardShell = ({ className = "", children }) => (
  <div
    className={[
      "relative rounded-xl bg-white/70 py-12 px-5 sm:px-6",
      "ring-1 ring-blue-500/10 shadow-lg",
      "backdrop-blur-sm",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

export default CardShell;
