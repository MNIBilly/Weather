import { cn } from "@/lib/utils";

interface WeatherIconProps {
  type: "sun" | "rain" | "cloudy" | "partly-cloudy" | "moon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const WeatherIcon = ({
  type,
  size = "md",
  className,
}: WeatherIconProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const renderIcon = () => {
    switch (type) {
      case "sun":
        return (
          <div className={cn("relative", sizeClasses[size])}>
            <img
              src="https://cdn.builder.io/api/v1/assets/c91491cbbb194f4fb9b6d163b60e9d95/image-c45119?format=webp&width=800"
              alt="Sun icon"
              className={cn("w-full h-full object-contain", sizeClasses[size])}
            />
          </div>
        );

      case "rain":
        return (
          <div className={cn("relative", sizeClasses[size])}>
            {/* Cloud */}
            <div
              className={cn(
                "bg-slate-400 rounded-full absolute",
                size === "xl"
                  ? "w-16 h-10 top-1"
                  : size === "lg"
                    ? "w-12 h-8 top-1"
                    : "w-10 h-6 top-1",
              )}
            />
            <div
              className={cn(
                "bg-slate-400 rounded-full absolute",
                size === "xl"
                  ? "w-10 h-6 top-3 left-2"
                  : size === "lg"
                    ? "w-8 h-5 top-2 left-2"
                    : "w-6 h-4 top-1 left-1",
              )}
            />
            <div
              className={cn(
                "bg-slate-400 rounded-full absolute",
                size === "xl"
                  ? "w-8 h-6 top-3 right-2"
                  : size === "lg"
                    ? "w-6 h-5 top-2 right-2"
                    : "w-5 h-4 top-1 right-1",
              )}
            />
            {/* Rain drops */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute bg-rain rounded-full",
                  size === "xl" ? "w-1 h-3" : "w-0.5 h-2",
                )}
                style={{
                  bottom: size === "xl" ? "-8px" : "-6px",
                  left: `${25 + i * 15}%`,
                }}
              />
            ))}
          </div>
        );

      case "partly-cloudy":
        return (
          <div className={cn("relative", sizeClasses[size])}>
            {/* Sun */}
            <div
              className={cn(
                "absolute bg-sun rounded-full",
                size === "xl"
                  ? "w-10 h-10 top-0 left-0"
                  : size === "lg"
                    ? "w-8 h-8 top-0 left-0"
                    : "w-6 h-6 top-0 left-0",
              )}
            />
            {/* Cloud overlay */}
            <div
              className={cn(
                "bg-slate-200 rounded-full absolute",
                size === "xl"
                  ? "w-12 h-8 top-2 right-0"
                  : size === "lg"
                    ? "w-10 h-6 top-2 right-0"
                    : "w-8 h-5 top-1 right-0",
              )}
            />
            <div
              className={cn(
                "bg-slate-200 rounded-full absolute",
                size === "xl"
                  ? "w-8 h-5 top-4 right-2"
                  : size === "lg"
                    ? "w-6 h-4 top-3 right-1"
                    : "w-5 h-3 top-2 right-1",
              )}
            />
          </div>
        );

      case "moon":
        return (
          <div className={cn("relative", sizeClasses[size])}>
            <div
              className={cn("bg-yellow-100 rounded-full", sizeClasses[size])}
            />
            <div
              className={cn(
                "bg-weather-primary rounded-full absolute top-1 left-1",
                size === "xl"
                  ? "w-16 h-16"
                  : size === "lg"
                    ? "w-12 h-12"
                    : "w-8 h-8",
              )}
            />
          </div>
        );

      default:
        return (
          <div className={cn("bg-slate-300 rounded-full", sizeClasses[size])} />
        );
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {renderIcon()}
    </div>
  );
};
