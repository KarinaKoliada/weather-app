export const mapOpenWeatherIcon = (icon: string): string => {
  switch (icon) {
    case "01d": return "clear-day";
    case "01n": return "clear-night";
    case "02d": return "cloudy-1-day";
    case "02n": return "cloudy-1-night";
    case "03d": return "cloudy-2-day";
    case "03n": return "cloudy-2-night";
    case "04d": return "cloudy-3-day";
    case "04n": return "cloudy-3-night";
    case "09d": return "rainy-1-day";
    case "09n": return "rainy-1-night";
    case "10d": return "rainy-2-day";
    case "10n": return "rainy-2-night";
    case "11d": return "thunderstorms";
    case "11n": return "thunderstorms";
    case "13d": return "snowy-1-day";
    case "13n": return "snowy-1-night";
    case "50d": return "fog-day";
    case "50n": return "fog-night";
    default: return "clear-day"; 
  }
};
