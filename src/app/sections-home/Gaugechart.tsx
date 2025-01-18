export function GaugeChart() {
  const percentage = 67.9;

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="96"
          cy="96"
          r="80"
          strokeWidth="12"
          fill="transparent"
          className="text-gray-200"
          stroke="currentColor"
        />
        {/* Foreground circle */}
        <circle
          cx="96"
          cy="96"
          r="80"
          strokeWidth="12"
          fill="transparent"
          className="text-green-500"
          stroke="currentColor"
          strokeDasharray={`${2 * Math.PI * 80}`}
          strokeDashoffset={`${
            2 * Math.PI * 80 - (percentage / 100) * 2 * Math.PI * 80
          }`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">{percentage}%</div>
        <div className="text-sm text-gray-500">Subscriptions</div>
      </div>
    </div>
  );
}
