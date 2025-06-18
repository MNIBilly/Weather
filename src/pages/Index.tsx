import { WeatherCard } from "@/components/ui/weather-card";
import { WeatherIcon } from "@/components/ui/weather-icon";
import { TemperatureChart } from "@/components/ui/temperature-chart";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  // Mock data for the weather dashboard
  const temperatureData = [
    { time: "16:00", temp: 35 },
    { time: "17:00", temp: 37 },
    { time: "18:00", temp: 33 },
    { time: "19:00", temp: 29 },
    { time: "20:00", temp: 25 },
    { time: "21:00", temp: 22 },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-weather-primary via-weather-secondary to-weather-dark p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <div className="flex items-center gap-3">
            <ChevronLeft className="text-white/70 w-6 h-6" />
            <h1 className="text-white text-lg font-medium">June 16 2025</h1>
            <ChevronRight className="text-white/70 w-6 h-6" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-weather-glass backdrop-blur-xs border border-weather-glass-border rounded-full pl-10 pr-4 py-2 text-white placeholder-white/60 text-sm w-64"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Current Weather - Large Card */}
          <div className="lg:col-span-1">
            <WeatherCard className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="text-6xl font-light text-white mb-2">
                    27°C
                  </div>
                  <div className="text-white/80 text-lg mb-4">Maribor</div>
                  <div className="text-white/60 text-sm mb-6">
                    Max: 35°C
                    <br />
                    Min: 17°C
                  </div>
                </div>
                <div className="flex justify-end">
                  <WeatherIcon type="sun" size="xl" />
                </div>
              </div>
            </WeatherCard>
          </div>

          {/* Temperature Chart */}
          <div className="lg:col-span-2">
            <TemperatureChart data={temperatureData} />
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="mb-6">
          <WeatherCard className="p-4">
            <div className="flex items-center justify-between mb-4">
              <ChevronLeft className="text-white/50 w-5 h-5" />
              <div className="flex gap-4 overflow-x-auto flex-1 mx-4">
                {hourlyForecast.map((hour, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-[80px] gap-2"
                  >
                    <div className="text-white/70 text-sm">{hour.time}</div>
                    <WeatherIcon type={hour.icon} size="sm" />
                    <div className="text-white font-medium">{hour.temp}</div>
                  </div>
                ))}
              </div>
              <ChevronRight className="text-white/50 w-5 h-5" />
            </div>
          </WeatherCard>
        </div>

        {/* Bottom Row - Weather Details and 3-Day Forecast */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weather Details Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Sunset */}
            <WeatherCard variant="small">
              <div className="text-white/70 text-sm mb-1">Sunset</div>
              <div className="text-white text-2xl font-medium">20:00</div>
            </WeatherCard>

            {/* UV Index */}
            <WeatherCard variant="small">
              <div className="text-white/70 text-sm mb-1">UV Index</div>
              <div className="text-white text-2xl font-medium">6</div>
            </WeatherCard>

            {/* Precipitation */}
            <WeatherCard variant="small">
              <div className="text-white/70 text-sm mb-1">Precipitation</div>
              <div className="text-white text-2xl font-medium">0 mm</div>
            </WeatherCard>

            {/* Humidity */}
            <WeatherCard variant="small">
              <div className="text-white/70 text-sm mb-1">Humidity</div>
              <div className="text-white text-2xl font-medium">65%</div>
            </WeatherCard>
          </div>

          {/* 3-Day Forecast */}
          <div className="lg:col-span-1">
            <WeatherCard>
              <h3 className="text-white/90 text-lg font-medium mb-4">
                3-Day Forecast
              </h3>
              <div className="space-y-4">
                {threeDayForecast.map((day, index) => (
                  <div
                    key={index}
                    className="bg-weather-glass rounded-xl p-3 border border-weather-glass-border"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-white font-medium w-12">
                        {day.day}
                      </div>
                      <div className="flex-1 flex justify-center">
                        <WeatherIcon type={day.icon} size="sm" />
                      </div>
                      <div className="text-right text-white">
                        <div className="font-medium">{day.high}</div>
                        <div className="text-white/60 text-sm">{day.low}</div>
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
