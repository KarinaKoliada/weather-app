import { HourlyWeather } from "@/utils/weatherTypes";
import WeatherIcon from "../WeatherIcons/WeatherIcons";

export default function HourlyCard({ time, temp, icon }: HourlyWeather) {
  return (
    <div
      className="min-w-[60px] h-28 flex flex-col justify-between items-center
      bg-white/10 backdrop-blur-md rounded-3xl p-2
      text-white
      shadow-lg"
    >
      <h4 className="text-xs opacity-80">
        {time.toLocaleTimeString("en-US", { hour: "2-digit" })}
      </h4>

      <div className="w-10 h-10">
        <WeatherIcon icon={icon} className="w-full h-full object-contain" />
      </div>

      <p className="text-sm font-medium">{Math.round(temp)}°</p>
    </div>
  );
}
