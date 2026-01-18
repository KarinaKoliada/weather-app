import { ForecastItem } from "@/types/weatherType";
import { HourlyWeather, Weather } from "@/utils/weatherTypes";

export async function getWeather(city: string): Promise<Weather> {
  const API_KEY = process.env.WEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("Weather cannot be fetched");

  const data = await res.json();

  return {
    name: data.name,
    temp: data.main.temp,
    desc: data.weather[0].description,
    icon: data.weather[0].icon,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    feelsLike: data.main.feels_like,
    date: new Date(data.dt * 1000),
    windSpeed: Math.round(data.wind.speed * 3.6),
    humidity: data.main.humidity,
    sunrise: new Date(data.sys.sunrise * 1000),
    sunset: new Date(data.sys.sunset * 1000),
    pressure: data.main.pressure,
    visibility: data.visibility / 1000,
  };
}

export async function getWeatherHourly(city: string): Promise<HourlyWeather[]> {
  const API_KEY = process.env.WEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Hourly weather cannot be fetched");
  }

  const data: { list: ForecastItem[] } = await res.json();

  return data.list.slice(0, 10).map((item) => ({
    time: new Date(item.dt * 1000),
    temp: item.main.temp,
    icon: item.weather[0].icon,
    desc: item.weather[0].description,
  }));
}
