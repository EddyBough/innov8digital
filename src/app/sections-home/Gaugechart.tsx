export function GaugeChart() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Background circle - full gray */}
      <div className="absolute inset-0 w-48 h-48 rounded-full border-[12px] border-gray-200 bg-transparent"></div>

      {/* Progress arc - green portion */}
      <div
        className="absolute inset-0 w-48 h-48 rounded-full"
        style={{
          background: `conic-gradient(from -90deg, #10b981 244deg, transparent 244deg)`,
          mask: "radial-gradient(circle, transparent 68px, black 80px)",
          WebkitMask: "radial-gradient(circle, transparent 68px, black 80px)",
        }}
      ></div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">67.9%</div>
        <div className="text-sm text-gray-500">Inscriptions</div>
      </div>
    </div>
  );
}
