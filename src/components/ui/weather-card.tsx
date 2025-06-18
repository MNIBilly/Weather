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
        "bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl text-white shadow-xl",
        {
          "p-4": variant === "small",
          "p-6": variant === "default",
          "p-6": variant === "chart",
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
