import { HourlyWeather } from "@/utils/weatherTypes";
import WeatherIcon from "../WeatherIcons/WeatherIcons";
import GlassCard from "@/app/components/GlassCard";

export default function WeatherTomorrow({ data }: { data: HourlyWeather }) {
  return (
    <GlassCard className="w-full max-w-sm mt-4 px-4 py-3 flex items-center justify-between">
      <div className="flex flex-row gap-4 justify-center items-center">
        <div className="flex flex-col">
          <span className="text-l opacity-90">Tomorrow</span>
          <span className="text-xs capitalize opacity-70">{data.desc}</span>
        </div>
        <span className="text-3xl font-semibold">{Math.round(data.temp)}°</span>
      </div>

      <div className="w-18 h-12">
        <WeatherIcon
          icon={data.icon}
          className="w-full h-full object-contain"
        />
      </div>
    </GlassCard>
  );
}