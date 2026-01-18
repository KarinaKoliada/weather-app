export type Weather = {
  name: string;
  temp: number;
  desc: string;
  icon: string;
  feelsLike: number;
  tempMax: number;
  tempMin: number;
  date: Date;
  windSpeed: number;
  humidity: number;
  sunrise: Date;
  sunset: Date;
  pressure: number;
  visibility: number;
};

export type HourlyWeather = {
  time: Date;
  temp: number;
  icon: string;
  desc?: string;
};
