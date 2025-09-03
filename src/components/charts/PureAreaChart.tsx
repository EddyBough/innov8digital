"use client";

interface DataPoint {
  name: number;
  value: number;
}

interface PureAreaChartProps {
  data: DataPoint[];
}

export function PureAreaChart({ data }: PureAreaChartProps) {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue || 1; // Éviter division par 0

  // Créer les points SVG avec une courbe plus lisse
  const points = data
    .map((point, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((point.value - minValue) / range) * 60 + 10; // 60% hauteur, 10% marge
      return `${x},${y}`;
    })
    .join(" ");

  // Points pour le remplissage (area)
  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="opacity-90"
      >
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <polygon
          points={areaPoints}
          fill="url(#areaGradient)"
          className="opacity-80"
        />

        {/* Line stroke */}
        <polyline
          points={points}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        />
      </svg>
    </div>
  );
}
