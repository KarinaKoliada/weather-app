export type WeatherType =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Snow"
  | "Thunderstorm"
  | "Drizzle"
  | "Mist";

export interface HourlyWeather {
  time: Date;
  temp: number;
  icon: string;
  desc?: string;
}

export interface CurrentWeather {
  city: string;
  temp: number;
  description: string;
  main: WeatherType;
}


export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

export interface HighlightCardProps {
  title: string;
  value: React.ReactNode;
  unit?: string;
};

export interface HourlyForecastProps {
  data: HourlyWeather[];
};

export interface HighlightProps  {
  windSpeed: number;
  humidity: number;
  sunrise: Date;
  pressure: number;
  visibility: number;
};