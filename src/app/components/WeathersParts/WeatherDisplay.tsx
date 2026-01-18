import WeatherIcon from "@/app/components/WeathersParts/WeatherIcons/WeatherIcons";
import { Weather } from "@/utils/weatherTypes";
import GlassCard from "../GlassCard";

export default function WeatherDisplay({ weather }: { weather: Weather }) {
  return (
    <GlassCard 
      className="flex items-stretch mb-6 mt-6 gap-6 text-center p-4 min-w-70"
      hover={true}
    >
      <div className="flex gap-2.5 flex-col items-start">
        <h1 className="flex items-center gap-2 text-xs font-extralight rounded-full py-1 px-2 bg-[#226dbc]/80 backdrop-blur-sm border border-white/20">
          <img className="h-3.5 w-3.5" src="/location.svg" alt="location" />
          {weather.name}
        </h1>
        
        <div>
          <p className="font-bold text-xl">
            {weather.date.toLocaleDateString("en-US", { weekday: "long" })}
          </p>
          <p className="font-light text-xs">
            {weather.date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "2-digit",
            })}
          </p>
        </div>
        
        <p className="text-3xl font-bold">{weather.temp.toFixed(0)}°C</p>
        
        <p className="text-xs opacity-80">
          High: {weather.tempMax.toFixed(0)}°C Low: {weather.tempMin.toFixed(0)}°C
        </p>
      </div>

      <div className="flex flex-col items-center justify-between min-w-[120px]">
        <div className="flex items-center justify-center w-23 h-23">
          <WeatherIcon
            icon={weather.icon}
            className="w-full h-full object-contain"
          />
        </div>
        
        <p className="capitalize text-sm text-center mt-1">{weather.desc}</p>
        
        <p className="text-xs text-center opacity-80">
          Feels like: {weather.feelsLike.toFixed(0)}°C
        </p>
      </div>
    </GlassCard>
  );
}
