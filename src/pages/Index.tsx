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

        {/* Top Row - 2 Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Table 1: Current Temperature */}
          <WeatherCard className="p-4 lg:p-6">
            {/* Temperature Data Table */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-5xl font-light text-white mb-1">27°C</div>
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

          {/* Table 2: Temperature Trend Chart */}
          <WeatherCard className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-base font-medium">
                Temperature Trend
              </h3>
              <div className="text-white/70 text-xs">°C</div>
            </div>

            <div className="relative h-32">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 120"
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
                    <stop offset="0%" stopColor="#FFA726" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFA726" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {[20, 40, 60, 80, 100].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    y1={y}
                    x2="280"
                    y2={y}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Temperature area and line */}
                <path
                  d="M 40,80 L 80,60 L 120,65 L 160,70 L 200,85 L 240,95 L 240,110 L 40,110 Z"
                  fill="url(#tempGradient)"
                />
                <path
                  d="M 40,80 L 80,60 L 120,65 L 160,70 L 200,85 L 240,95"
                  fill="none"
                  stroke="#FFA726"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {[
                  { x: 40, y: 80 },
                  { x: 80, y: 60 },
                  { x: 120, y: 65 },
                  { x: 160, y: 70 },
                  { x: 200, y: 85 },
                  { x: 240, y: 95 },
                ].map((point, i) => (
                  <circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill="#FFA726"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>16:00</span>
              <span>17:00</span>
              <span>18:00</span>
              <span>19:00</span>
              <span>20:00</span>
              <span>21:00</span>
            </div>
          </WeatherCard>
        </div>

        {/* Bottom Row - 3 Tables - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Table 3: Hourly Temperature Table */}
          <div className="lg:col-span-5">
            <WeatherCard className="p-4 lg:p-5 -mr-1">
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
              <div className="grid grid-cols-2 gap-3">
                {/* UV Index */}
                <WeatherCard className="p-3 lg:p-4 text-center flex flex-col justify-center">
                  <div className="text-white/70 text-xs mb-1">UV Index</div>
                  <div className="text-white text-lg lg:text-xl font-light">
                    6
                  </div>
                </WeatherCard>

                {/* Sunset */}
                <WeatherCard className="p-3 lg:p-4 text-center flex flex-col justify-center">
                  <div className="text-white/70 text-xs mb-1">Sunset</div>
                  <div className="text-white text-lg lg:text-xl font-light">
                    20:00
                  </div>
                </WeatherCard>

                {/* Precipitation */}
                <WeatherCard className="p-3 lg:p-4 text-center flex flex-col justify-center">
                  <div className="text-white/70 text-xs mb-1">
                    Precipitation
                  </div>
                  <div className="text-white text-lg lg:text-xl font-light">
                    0 mm
                  </div>
                </WeatherCard>

                {/* Humidity */}
                <WeatherCard className="p-3 lg:p-4 text-center flex flex-col justify-center">
                  <div className="text-white/70 text-xs mb-1">Humidity</div>
                  <div className="text-white text-lg lg:text-xl font-light">
                    65%
                  </div>
                </WeatherCard>
              </div>
            </WeatherCard>
          </div>

          {/* Table 5: 3-Day Forecast Table */}
          <div className="lg:col-span-4">
            <WeatherCard className="p-4 lg:p-5 h-full -mb-1">
              <h3 className="text-white text-base font-medium mb-3 lg:mb-4">
                3-Day Forecast
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {threeDayForecast.map((day, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 border border-white/15"
                  >
                    <div className="grid grid-cols-12 items-center gap-2">
                      <div className="col-span-2 text-white font-medium text-sm">
                        {day.day}
                      </div>
                      <div className="col-span-3 flex justify-center">
                        <WeatherIcon type={day.icon} size="sm" />
                      </div>
                      <div className="col-span-7 text-right">
                        <div className="text-white font-medium text-sm">
                          {day.high}
                        </div>
                        <div className="text-white/70 text-xs">{day.low}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </WeatherCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
