import { HourlyForecastProps } from "@/types/weatherType";
import HourlyCard from "./HourlyCard";

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <div className="w-full overflow-x-auto py-2">
      <div className="flex gap-3">
        {data.map((hour) => (
          <HourlyCard
            key={hour.time.toISOString()}
            time={hour.time}
            temp={hour.temp}
            icon={hour.icon}
          />
        ))}
      </div>
    </div>
  );
}