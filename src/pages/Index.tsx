import { WeatherCard } from "@/components/ui/weather-card";
import { WeatherIcon } from "@/components/ui/weather-icon";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const hourlyForecast = [
    { time: "16:00", temp: "27°C", icon: "sun" as const },
    { time: "17:00", temp: "35°C", icon: "sun" as const },
    { time: "18:00", temp: "26°C", icon: "rain" as const },
    { time: "19:00", temp: "23°C", icon: "sun" as const },
    { time: "20:00", temp: "19°C", icon: "partly-cloudy" as const },
    { time: "21:00", temp: "17°C", icon: "moon" as const },
  ];

  const threeDayForecast = [
    { day: "Tue", icon: "rain" as const, high: "27°C", low: "19°C" },
    { day: "Wed", icon: "sun" as const, high: "29°C", low: "18°C" },
    { day: "Thu", icon: "sun" as const, high: "27°C", low: "18°C" },
  ];

  // Temperature chart component inline for exact match
  const TemperatureChart = () => {
    const data = [
      { time: "16:00", temp: 35 },
      { time: "17:00", temp: 37 },
      { time: "18:00", temp: 33 },
      { time: "19:00", temp: 29 },
      { time: "20:00", temp: 25 },
      { time: "21:00", temp: 22 },
    ];

    return (
      <WeatherCard className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-medium text-white">Temperature Trend</h3>
        </div>

        <div className="relative h-32 mb-4">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 320 120"
            className="absolute inset-0"
          >
            {/* Grid lines */}
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFA726" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFA726" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            {[0, 1, 2, 3, 4].map((line) => (
              <line
                key={line}
                x1="30"
                y1={20 + line * 20}
                x2="290"
                y2={20 + line * 20}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
            ))}

            {/* Area under curve */}
            <path
              d="M 50,70 Q 90,50 110,55 T 170,60 Q 210,65 230,75 T 270,90 L 270,100 L 50,100 Z"
              fill="url(#chartGradient)"
            />

            {/* Temperature curve */}
            <path
              d="M 50,70 Q 90,50 110,55 T 170,60 Q 210,65 230,75 T 270,90"
              fill="none"
              stroke="#FFA726"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Data points */}
            {data.map((_, index) => {
              const x = 50 + index * 44;
              const y = [70, 50, 55, 60, 75, 90][index];
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
        <div className="flex justify-between text-xs text-white/70 px-4">
          {data.map((point) => (
            <span key={point.time}>{point.time}</span>
          ))}
        </div>
      </WeatherCard>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4ECDC4] via-[#44B8A3] to-[#3AA394] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-2">
          <div className="flex items-center gap-3">
            <ChevronLeft className="text-white/80 w-5 h-5" />
            <h1 className="text-white text-xl font-medium">June 16 2025</h1>
            <ChevronRight className="text-white/80 w-5 h-5" />
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl pl-11 pr-5 py-3 text-white placeholder-white/70 text-sm w-72"
            />
          </div>
        </div>

        {/* Main 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Current Weather - Top Left */}
          <WeatherCard className="p-8">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="text-7xl font-light text-white mb-2">27°C</div>
                <div className="text-white/90 text-xl mb-6">Maribor</div>
                <div className="text-white/70 text-base">
                  Max: 35°C
                  <br />
                  Min: 17°C
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <WeatherIcon type="sun" size="xl" />
              </div>
            </div>
          </WeatherCard>

          {/* Temperature Chart - Top Right */}
          <TemperatureChart />

          {/* Hourly Forecast - Bottom Left */}
          <WeatherCard className="p-6">
            <div className="flex items-center justify-between">
              <ChevronLeft className="text-white/60 w-5 h-5 flex-shrink-0" />
              <div className="flex gap-6 overflow-hidden flex-1 mx-4">
                {hourlyForecast.map((hour, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 min-w-[60px]"
                  >
                    <div className="text-white/80 text-sm font-medium">
                      {hour.temp}
                    </div>
                    <WeatherIcon type={hour.icon} size="sm" />
                    <div className="text-white/70 text-xs">{hour.time}</div>
                  </div>
                ))}
              </div>
              <ChevronRight className="text-white/60 w-5 h-5 flex-shrink-0" />
            </div>
          </WeatherCard>

          {/* 3-Day Forecast - Bottom Right */}
          <WeatherCard className="p-6">
            <h3 className="text-white text-lg font-medium mb-6">
              3-Day Forecast
            </h3>
            <div className="space-y-4">
              {threeDayForecast.map((day, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-4 border border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-white font-medium text-lg w-12">
                      {day.day}
                    </div>
                    <div className="flex-1 flex justify-center">
                      <WeatherIcon type={day.icon} size="md" />
                    </div>
                    <div className="text-right text-white">
                      <div className="font-semibold text-lg">{day.high}</div>
                      <div className="text-white/70 text-sm">{day.low}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </WeatherCard>
        </div>

        {/* Bottom Weather Details Grid */}
        <div className="grid grid-cols-4 gap-6">
          {/* Sunset */}
          <WeatherCard variant="small" className="text-center">
            <div className="text-white/70 text-sm mb-2">Sunset</div>
            <div className="text-white text-3xl font-light">20:00</div>
          </WeatherCard>

          {/* UV Index */}
          <WeatherCard variant="small" className="text-center">
            <div className="text-white/70 text-sm mb-2">UV Index</div>
            <div className="text-white text-3xl font-light">6</div>
          </WeatherCard>

          {/* Precipitation */}
          <WeatherCard variant="small" className="text-center">
            <div className="text-white/70 text-sm mb-2">Precipitation</div>
            <div className="text-white text-3xl font-light">0 mm</div>
          </WeatherCard>

          {/* Humidity */}
          <WeatherCard variant="small" className="text-center">
            <div className="text-white/70 text-sm mb-2">Humidity</div>
            <div className="text-white text-3xl font-light">65%</div>
          </WeatherCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
