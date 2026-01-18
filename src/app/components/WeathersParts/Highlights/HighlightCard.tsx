import { HighlightCardProps } from "@/types/weatherType";

export default function HighlightCard({
  title,
  value,
  unit,
}: HighlightCardProps) {
  return (
    <div
      className="
      rounded-3xl p-4
      bg-white/10 backdrop-blur-md
      min-h-[96px]
      flex flex-col justify-between
    "
    >
      <span className="text-[10px] tracking-widest opacity-60">{title}</span>

      <div className="flex items-end gap-1">
        <span className="text-3xl font-semibold leading-none">{value}</span>
        {unit && <span className="text-sm opacity-70 mb-0.5">{unit}</span>}
      </div>
    </div>
  );
}