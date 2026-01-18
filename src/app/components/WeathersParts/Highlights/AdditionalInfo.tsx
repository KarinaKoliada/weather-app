// src/app/components/WeathersParts/Highlights/AdditionalInfo.tsx
import { HighlightProps } from "@/types/weatherType";
import HighlightCard from "./HighlightCard";

type AdditionalInfoProps = Pick<HighlightProps, 'visibility'>;

export default function AdditionalInfo({ visibility }: AdditionalInfoProps) {
  return (
    <div className="mt-3">
      <h2 className="text-xs tracking-widest opacity-60 mb-4">MORE INFO</h2>
      <div className="grid grid-cols-2 gap-4">
        <HighlightCard title="VISIBILITY" value={visibility} unit="km" />
        <HighlightCard title="UV INDEX" value="—" />
      </div>
    </div>
  );
}