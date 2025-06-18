interface WeatherIconProps {
  type: "sun" | "rain" | "cloudy" | "partly-cloudy" | "moon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const WeatherIcon = ({
  type,
  size = "md",
  className = "",
}: WeatherIconProps) => {
  const sizeClass = {
    sm: "weather-icon-small",
    md: "weather-icon-medium",
    lg: "weather-icon-large",
    xl: "weather-icon-large", // Using large for xl as well
  }[size];

  const renderIcon = () => {
    switch (type) {
      case "sun":
        return (
          <img
            src="https://cdn.builder.io/api/v1/assets/c91491cbbb194f4fb9b6d163b60e9d95/image-c45119?format=webp&width=800"
            alt="Sun icon"
          />
        );

      case "rain":
        return (
          <img
            src="https://cdn.builder.io/api/v1/assets/c91491cbbb194f4fb9b6d163b60e9d95/image-347a59?format=webp&width=800"
            alt="Rain icon"
          />
        );

      case "partly-cloudy":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(45deg, #FFA726 50%, #E0E0E0 50%)",
              borderRadius: "50%",
            }}
          />
        );

      case "moon":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#FFF8DC",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                background: "#4ECDC4",
                borderRadius: "50%",
              }}
            />
          </div>
        );

      default:
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#E0E0E0",
              borderRadius: "50%",
            }}
          />
        );
    }
  };

  return (
    <div className={`weather-icon ${sizeClass} ${className}`}>
      {renderIcon()}
    </div>
  );
};
