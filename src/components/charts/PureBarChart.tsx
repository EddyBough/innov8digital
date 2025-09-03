"use client";

interface BarData {
  first: number;
  second: number;
  third: number;
}

interface PureBarChartProps {
  data: BarData[];
}

export function PureBarChart({ data }: PureBarChartProps) {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(
    ...data.flatMap((d) => [d.first, d.second, d.third])
  );

  return (
    <div className="w-full h-full flex items-end justify-center gap-1 px-4 py-2">
      {data.map((item, index) => {
        // Calculer en pixels plutôt qu'en pourcentage pour plus de contrôle
        const baseHeight = 160; // Hauteur de base en pixels
        const firstHeight = Math.max((item.first / maxValue) * baseHeight, 20);
        const secondHeight = Math.max(
          (item.second / maxValue) * baseHeight,
          20
        );
        const thirdHeight = Math.max((item.third / maxValue) * baseHeight, 20);

        return (
          <div key={index} className="flex items-end gap-1 flex-1">
            {/* First bar */}
            <div
              className="w-full bg-blue-600 rounded-t-sm"
              style={{
                height: `${firstHeight}px`,
              }}
            />

            {/* Second bar */}
            <div
              className="w-full bg-blue-400 rounded-t-sm"
              style={{
                height: `${secondHeight}px`,
              }}
            />

            {/* Third bar */}
            <div
              className="w-full bg-blue-200 rounded-t-sm"
              style={{
                height: `${thirdHeight}px`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
