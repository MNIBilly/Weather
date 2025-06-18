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
        "bg-white/15 backdrop-blur-md border border-white/25 rounded-3xl text-white shadow-2xl",
        "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none",
        "relative overflow-hidden",
        {
          "p-4": variant === "small",
          "p-6": variant === "default",
          "p-6": variant === "chart",
        },
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
