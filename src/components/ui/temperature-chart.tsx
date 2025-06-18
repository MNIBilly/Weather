import { WeatherCard } from "./weather-card";

interface TemperatureData {
  time: string;
  temp: number;
}

interface TemperatureChartProps {
  data: TemperatureData[];
  title?: string;
}

export const TemperatureChart = ({
  data,
  title = "Temperature Trend",
}: TemperatureChartProps) => {
  const maxTemp = Math.max(...data.map((d) => d.temp));
  const minTemp = Math.min(...data.map((d) => d.temp));
  const tempRange = maxTemp - minTemp;

  // Create SVG path for the temperature line
  const createPath = () => {
    const width = 280;
    const height = 80;
    const padding = 20;

    const points = data.map((point, index) => {
      const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
      const y =
        height -
        padding -
        ((point.temp - minTemp) / tempRange) * (height - 2 * padding);
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")}`;
  };

  return (
    <WeatherCard variant="chart" className="relative">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-white/90">{title}</h3>
        <div className="text-right">
          <div className="text-sm text-white/70">°C</div>
        </div>
      </div>

      <div className="relative h-24 mb-4">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 280 80"
          className="absolute inset-0"
        >
          {/* Grid lines */}
          <defs>
            <linearGradient
              id="temperatureGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6FE8DD" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6FE8DD" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Grid */}
          {[0, 1, 2, 3, 4].map((line) => (
            <line
              key={line}
              x1="20"
              y1={20 + line * 10}
              x2="260"
              y2={20 + line * 10}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Temperature line */}
          <path
            d={createPath()}
            fill="none"
            stroke="#FFA726"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((point, index) => {
            const x = 20 + (index / (data.length - 1)) * 240;
            const y = 60 - ((point.temp - minTemp) / tempRange) * 40;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#FFA726"
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>

      {/* Time labels */}
      <div className="flex justify-between text-xs text-white/60 mt-2">
        {data.map((point, index) => (
          <span key={index}>{point.time}</span>
        ))}
      </div>
    </WeatherCard>
  );
};
