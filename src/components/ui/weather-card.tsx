import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WeatherCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "small" | "chart";
}

export const WeatherCard = ({
  children,
  className,
  variant = "default",
}: WeatherCardProps) => {
  return (
    <div
      className={cn(
        "bg-weather-glass backdrop-blur-xs border border-weather-glass-border rounded-2xl p-6 text-white shadow-lg",
        {
          "p-4": variant === "small",
          "p-6": variant === "default",
          "p-6 h-48": variant === "chart",
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
