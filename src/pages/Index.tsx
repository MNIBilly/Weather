import { WeatherCard } from "@/components/ui/weather-card";
import { WeatherIcon } from "@/components/ui/weather-icon";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useMemo, useCallback } from "react";

// Types for better type safety
type WeatherIconType = "sun" | "rain" | "partly-cloudy" | "moon";

interface HourlyForecast {
  time: string;
  temp: string;
  icon: WeatherIconType;
}

interface DayForecast {
  day: string;
  icon: WeatherIconType;
  high: string;
  low: string;
}

interface WeatherMetric {
  label: string;
  value: string;
}

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Memoized data to prevent unnecessary re-renders
  const hourlyForecast = useMemo<HourlyForecast[]>(
    () => [
      { time: "16:00", temp: "27°C", icon: "sun" },
      { time: "17:00", temp: "35°C", icon: "sun" },
      { time: "18:00", temp: "26°C", icon: "rain" },
      { time: "19:00", temp: "23°C", icon: "sun" },
      { time: "20:00", temp: "19°C", icon: "partly-cloudy" },
      { time: "21:00", temp: "17°C", icon: "moon" },
    ],
    [],
  );

  const threeDayForecast = useMemo<DayForecast[]>(
    () => [
      { day: "Tue", icon: "rain", high: "27°C", low: "19°C" },
      { day: "Wed", icon: "sun", high: "29°C", low: "18°C" },
      { day: "Thu", icon: "sun", high: "27°C", low: "18°C" },
    ],
    [],
  );

  const weatherMetrics = useMemo<WeatherMetric[]>(
    () => [
      { label: "UV Index", value: "6" },
      { label: "Sunset", value: "20:00" },
      { label: "Precipitation", value: "0 mm" },
      { label: "Humidity", value: "65%" },
    ],
    [],
  );

  // Optimized scroll functions with useCallback
  const scrollLeft = useCallback(() => {
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  }, []);

  // Common button classes
  const navButtonClass =
    "text-white/70 w-4 h-4 cursor-pointer hover:text-white transition-colors";
  const scrollButtonClass =
    "text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-xl flex-shrink-0";
  const hourlyCardClass =
    "bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-3 lg:p-4 min-w-[70px] lg:min-w-[80px] text-center space-y-2 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transform-gpu flex-shrink-0";
  const metricCardClass =
    "bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300 transform-gpu cursor-pointer";
  const forecastCardClass =
    "bg-white/10 rounded-2xl p-4 border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300 transform-gpu cursor-pointer";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
        {/* Top Row - 2 Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
          {/* Current Temperature with Header */}
          <WeatherCard className="p-4 lg:p-6" style={{ paddingBottom: "62px" }}>
            {/* Header with Date Navigation and Search */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <ChevronLeft className={navButtonClass} />
                <span className="text-white/90 text-sm font-medium">
                  June 16 2025
                </span>
                <ChevronRight className={navButtonClass} />
              </div>
              <div className="relative">
                <Search className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-3 h-3" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-7 lg:pl-8 pr-2 lg:pr-3 py-1 lg:py-1.5 text-white placeholder-white/60 text-xs w-20 sm:w-24 lg:w-28"
                />
              </div>
            </div>

            {/* Temperature Display */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-5xl font-bold text-white mb-1">27°C</div>
                <div className="text-white/90 text-lg mb-3">Maribor</div>
                <div className="space-y-1">
                  <div className="text-white/70 text-sm">Max: 35°C</div>
                  <div className="text-white/70 text-sm">Min: 17°C</div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <WeatherIcon type="sun" size="lg" />
              </div>
            </div>
          </WeatherCard>

          {/* Temperature Trend Chart */}
          <WeatherCard className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-medium">
                Temperature Trend
              </h3>
              <div className="text-white/70 text-sm">°C</div>
            </div>

            <div className="relative h-48 mb-4">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 180"
                className="absolute inset-0"
              >
                <defs>
                  <linearGradient
                    id="tempGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFA726" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFA726" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {[16, 17, 18, 19, 20, 21].map((hour, index) => (
                  <line
                    key={hour}
                    x1={50 + index * 55}
                    y1="20"
                    x2={50 + index * 55}
                    y2="140"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {[20, 40, 60, 80, 100, 120, 140].map((y) => (
                  <line
                    key={y}
                    x1="30"
                    y1={y}
                    x2="370"
                    y2={y}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Temperature values */}
                {[37, 35, 33, 31, 29, 27, 25].map((temp, index) => (
                  <text
                    key={temp}
                    x="15"
                    y={25 + index * 20}
                    fill="rgba(255,255,255,0.6)"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    {temp}°
                  </text>
                ))}

                {/* Temperature area and line */}
                <path
                  d="M 50,100 L 105,45 L 160,55 L 215,65 L 270,90 L 325,110 L 325,140 L 50,140 Z"
                  fill="url(#tempGradient)"
                />
                <path
                  d="M 50,100 L 105,45 L 160,55 L 215,65 L 270,90 L 325,110"
                  fill="none"
                  stroke="#FFA726"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {[
                  { x: 50, y: 100, temp: "27°C" },
                  { x: 105, y: 45, temp: "35°C" },
                  { x: 160, y: 55, temp: "33°C" },
                  { x: 215, y: 65, temp: "31°C" },
                  { x: 270, y: 90, temp: "29°C" },
                  { x: 325, y: 110, temp: "25°C" },
                ].map((point, i) => (
                  <g key={i}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#FFA726"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x={point.x}
                      y={point.y - 12}
                      fill="white"
                      fontSize="10"
                      textAnchor="middle"
                      fontWeight="600"
                    >
                      {point.temp}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Time labels */}
            <div className="flex justify-between text-sm text-white/70 px-8">
              {["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"].map(
                (time) => (
                  <span key={time} className="font-medium">
                    {time}
                  </span>
                ),
              )}
            </div>
          </WeatherCard>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="space-y-4 lg:space-y-6">
            {/* Hourly Temperature Table */}
            <WeatherCard className="p-4 lg:p-5">
              <div className="flex items-center justify-between gap-3">
                <button onClick={scrollLeft} className={scrollButtonClass}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div
                  ref={scrollContainerRef}
                  className="flex-1 flex gap-2 lg:gap-3 overflow-x-auto scrollbar-hide"
                >
                  {hourlyForecast.map((hour, index) => (
                    <div
                      key={`${hour.time}-${index}`}
                      className={hourlyCardClass}
                    >
                      <div className="text-white font-semibold text-sm lg:text-base">
                        {hour.temp}
                      </div>
                      <div className="flex justify-center">
                        <WeatherIcon type={hour.icon} size="sm" />
                      </div>
                      <div className="text-white/80 text-xs font-medium">
                        {hour.time}
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={scrollRight} className={scrollButtonClass}>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </WeatherCard>

            {/* Weather Metrics Grid */}
            <WeatherCard className="p-4 lg:p-6">
              <div className="grid grid-cols-2 gap-4">
                {weatherMetrics.map(({ label, value }, index) => (
                  <div
                    key={`${label}-${index}`}
                    className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300 transform-gpu cursor-pointer"
                  >
                    <div className="text-white/70 text-sm mb-2">{label}</div>
                    <div className="text-white text-2xl font-light">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </WeatherCard>
          </div>

          {/* 3-Day Forecast */}
          <WeatherCard className="p-4 lg:p-6">
            <h3 className="text-white text-lg font-medium mb-4">
              3-Day Forecast
            </h3>
            <div className="space-y-4">
              {threeDayForecast.map(({ day, icon, high, low }, index) => (
                <div key={`${day}-${index}`} className={forecastCardClass}>
                  <div className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-2 text-white font-medium text-base">
                      {day}
                    </div>
                    <div className="col-span-4 flex justify-center">
                      <WeatherIcon type={icon} size="md" />
                    </div>
                    <div className="col-span-6 text-right">
                      <div className="text-white font-semibold text-lg">
                        {high}
                      </div>
                      <div className="text-white/70 text-sm">{low}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </WeatherCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
