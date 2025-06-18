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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4ECDC4] via-[#44B8A3] to-[#3AA394] p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
        {/* Top Row - 2 Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
          {/* Table 1: Current Temperature with Header */}
          <WeatherCard className="p-4 lg:p-6">
            {/* Header with Date Navigation and Search */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <ChevronLeft className="text-white/70 w-4 h-4 cursor-pointer hover:text-white" />
                <span className="text-white/90 text-sm font-medium">
                  June 16 2025
                </span>
                <ChevronRight className="text-white/70 w-4 h-4 cursor-pointer hover:text-white" />
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

            {/* Nested Weather Card for Temperature Data */}
            <WeatherCard className="p-4 lg:p-6">
              {/* Temperature Data Table */}
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
          </WeatherCard>

          {/* Table 2: Temperature Trend Chart */}
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
                {/* Grid */}
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

                {/* Vertical grid lines for each hour */}
                {[16, 17, 18, 19, 20, 21].map((hour, index) => {
                  const x = 50 + index * 55;
                  return (
                    <line
                      key={hour}
                      x1={x}
                      y1="20"
                      x2={x}
                      y2="140"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Horizontal grid lines */}
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

                {/* Temperature values on Y-axis */}
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

                {/* Temperature area and line - adapted to hourly data */}
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

                {/* Data points with temperature values */}
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

            {/* Time labels with better spacing */}
            <div className="flex justify-between text-sm text-white/70 px-8">
              <span className="font-medium">16:00</span>
              <span className="font-medium">17:00</span>
              <span className="font-medium">18:00</span>
              <span className="font-medium">19:00</span>
              <span className="font-medium">20:00</span>
              <span className="font-medium">21:00</span>
            </div>
          </WeatherCard>
        </div>

        {/* Bottom Row - New Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column: Hourly Temperature and Weather Info */}
          <div className="space-y-4 lg:space-y-6">
            {/* Table 3: Hourly Temperature Table */}
            <WeatherCard className="p-4 lg:p-5">
              <div className="flex items-center justify-between gap-3">
                <button className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-xl">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex-1 flex gap-2 lg:gap-3 overflow-x-auto">
                  {hourlyForecast.map((hour, index) => (
                    <div
                      key={index}
                      className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-3 lg:p-4 min-w-[70px] lg:min-w-[80px] text-center space-y-2 hover:bg-white/20 transition-colors cursor-pointer"
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
                <button className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-xl">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </WeatherCard>

            {/* Table 4: Other Weather Info Grid */}
            <WeatherCard className="p-4 lg:p-6">
              <div className="grid grid-cols-2 gap-4">
                {/* UV Index */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-2">UV Index</div>
                  <div className="text-white text-2xl font-light">6</div>
                </div>

                {/* Sunset */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-2">Sunset</div>
                  <div className="text-white text-2xl font-light">20:00</div>
                </div>

                {/* Precipitation */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-2">
                    Precipitation
                  </div>
                  <div className="text-white text-2xl font-light">0 mm</div>
                </div>

                {/* Humidity */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-2">Humidity</div>
                  <div className="text-white text-2xl font-light">65%</div>
                </div>
              </div>
            </WeatherCard>
          </div>

          {/* Right Column: 3-Day Forecast - Stretched like Temperature Trend */}
          <WeatherCard className="p-4 lg:p-6">
            <h3 className="text-white text-lg font-medium mb-4">
              3-Day Forecast
            </h3>
            <div className="space-y-4">
              {threeDayForecast.map((day, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-2xl p-4 border border-white/15"
                >
                  <div className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-2 text-white font-medium text-base">
                      {day.day}
                    </div>
                    <div className="col-span-4 flex justify-center">
                      <WeatherIcon type={day.icon} size="md" />
                    </div>
                    <div className="col-span-6 text-right">
                      <div className="text-white font-semibold text-lg">
                        {day.high}
                      </div>
                      <div className="text-white/70 text-sm">{day.low}</div>
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
