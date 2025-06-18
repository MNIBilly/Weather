import { WeatherCard } from "@/components/ui/weather-card";
import { WeatherIcon } from "@/components/ui/weather-icon";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useMemo, useCallback } from "react";
import "../styles/weather-dashboard.css";

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

  return (
    <div className="weather-dashboard">
      <div className="dashboard-container">
        {/* Top Row - 2 Tables */}
        <div className="top-grid">
          {/* Current Temperature with Header */}
          <div className="weather-card temperature-card">
            <div className="weather-card-inner">
              {/* Header with Date Navigation and Search */}
              <div className="header">
                <div className="date-nav">
                  <ChevronLeft className="nav-button" />
                  <span className="date-text">June 16 2025</span>
                  <ChevronRight className="nav-button" />
                </div>
                <div className="search-container">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                </div>
              </div>

              {/* Temperature Display */}
              <div className="temperature-display">
                <div className="temperature-info">
                  <div className="main-temperature">27°C</div>
                  <div className="location">Maribor</div>
                  <div className="temperature-range">
                    <div className="temp-range-item">Max: 35°C</div>
                    <div className="temp-range-item">Min: 17°C</div>
                  </div>
                </div>
                <div className="weather-icon-container">
                  <WeatherIcon type="sun" size="lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Temperature Trend Chart */}
          <div className="weather-card">
            <div className="weather-card-inner">
              <div className="chart-header">
                <h3 className="chart-title">Temperature Trend</h3>
                <div className="chart-unit">°C</div>
              </div>

              <div className="chart-container">
                <svg className="chart-svg" viewBox="0 0 400 180">
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
              <div className="time-labels">
                {["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"].map(
                  (time) => (
                    <span key={time} className="time-label">
                      {time}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bottom-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Hourly Temperature Table */}
            <div className="weather-card">
              <div className="weather-card-inner">
                <div className="hourly-forecast">
                  <button onClick={scrollLeft} className="scroll-button">
                    <ChevronLeft size={20} />
                  </button>
                  <div ref={scrollContainerRef} className="hourly-container">
                    {hourlyForecast.map((hour, index) => (
                      <div
                        key={`${hour.time}-${index}`}
                        className="hourly-card"
                      >
                        <div className="hourly-temp">{hour.temp}</div>
                        <div className="hourly-icon">
                          <WeatherIcon type={hour.icon} size="sm" />
                        </div>
                        <div className="hourly-time">{hour.time}</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={scrollRight} className="scroll-button">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Weather Metrics Grid */}
            <div className="weather-card">
              <div className="weather-card-inner">
                <div className="metrics-grid">
                  {weatherMetrics.map(({ label, value }, index) => (
                    <div key={`${label}-${index}`} className="metric-card">
                      <div className="metric-label">{label}</div>
                      <div className="metric-value">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3-Day Forecast */}
          <div className="weather-card">
            <div className="weather-card-inner">
              <h3 className="forecast-title">3-Day Forecast</h3>
              <div className="forecast-list">
                {threeDayForecast.map(({ day, icon, high, low }, index) => (
                  <div key={`${day}-${index}`} className="forecast-card">
                    <div className="forecast-content">
                      <div className="forecast-day">{day}</div>
                      <div className="forecast-icon">
                        <WeatherIcon type={icon} size="md" />
                      </div>
                      <div className="forecast-temps">
                        <div className="forecast-high">{high}</div>
                        <div className="forecast-low">{low}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
