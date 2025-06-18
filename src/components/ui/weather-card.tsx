import { ReactNode } from "react";

interface WeatherCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "small" | "chart";
}

export const WeatherCard = ({ children, className = "" }: WeatherCardProps) => {
  return (
    <div className={`weather-card ${className}`}>
      <div className="weather-card-inner">{children}</div>
    </div>
  );
};
