interface DataPoint {
  name: string;
  mobile: number;
  desktop: number;
  tablet: number;
}

const data: DataPoint[] = [
  { name: "Jan", mobile: 80, desktop: 88, tablet: 70 },
  { name: "Feb", mobile: 85, desktop: 90, tablet: 75 },
  { name: "Mar", mobile: 82, desktop: 87, tablet: 72 },
];

export function UsageChart() {
  return (
    <div className="relative w-full h-[200px]">
      <div className="grid grid-cols-3 gap-2 h-full px-4">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="flex-1 flex flex-col-reverse w-full items-center">
              <div
                style={{ height: `${item.mobile}%` }}
                className="w-2/12 bg-blue-500 rounded-t-lg"
              ></div>
              <div
                style={{ height: `${item.desktop}%` }}
                className="w-2/12 bg-green-500 rounded-t-lg"
              ></div>
              <div
                style={{ height: `${item.tablet}%` }}
                className="w-2/12 bg-red-500 rounded-t-lg"
              ></div>
            </div>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
