// src/app/components/WeathersParts/Highlights/TodayHighlights.tsx
import { HighlightProps } from "@/types/weatherType";
import HighlightCard from "./HighlightCard";

type TodayHighlightsProps = Pick<HighlightProps, 'windSpeed' | 'humidity' | 'sunrise' | 'pressure'>;

export default function Highlight({
  windSpeed,
  humidity,
  sunrise,
  pressure,
}: TodayHighlightsProps) {
  return (
    <div>
      <h2 className="text-xs tracking-widest opacity-60 mb-4">TODAY&apos;S HIGHLIGHTS</h2>
      <div className="grid grid-cols-2 gap-4">
        <HighlightCard title="WIND" value={windSpeed} unit="km/h" />
        <HighlightCard title="HUMIDITY" value={humidity} unit="%" />
        <HighlightCard
          title="SUNRISE"
          value={sunrise.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
        <HighlightCard title="PRESSURE" value={pressure} unit="hPa" />
      </div>
    </div>
  );
}