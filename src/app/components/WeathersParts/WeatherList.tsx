import { getWeather, getWeatherHourly } from "@/lib/weatherApi";
import SearchedWeather from "./SearchedWeather";
import WeatherDisplay from "./WeatherDisplay";
import Highlight from "./Highlights/Highlight";
import HourlyForecast from "./Hourly/HourlyForecast";
import WeatherTomorrow from "./Tomorrow/WeatherTomorrow";
import AdditionalInfo from "./Highlights/AdditionalInfo";

type Props = {
  searchParams: {
    city?: string;
  };
};


export default async function WeatherList({ searchParams }: Props) {
  const { city } = await searchParams;

  if (!city) {
    return (
      <div className="p-12">
        <SearchedWeather />
        <p className="mt-4 opacity-60">Enter city</p>
      </div>
    );
  }

  const weather = await getWeather(city);
  const hourly = await getWeatherHourly(city);

  const tomorrow = hourly.find(
    (h) => h.time.getHours() >= 12 && h.time.getHours() <= 15
  );

  return (
    <div className="p-8 max-w-md mx-auto text-white">
      <SearchedWeather />

      <WeatherDisplay
        weather={weather} />

      <Highlight
        windSpeed={weather.windSpeed}
        humidity={weather.humidity}
        sunrise={weather.sunrise}
        pressure={weather.pressure}
      />

      <HourlyForecast data={hourly} />
      <AdditionalInfo  visibility={weather.visibility} />

      {tomorrow && <WeatherTomorrow data={tomorrow} />}
    </div>
  );
}
