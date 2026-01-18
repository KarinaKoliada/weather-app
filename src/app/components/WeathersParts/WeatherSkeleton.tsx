// src/app/components/WeathersParts/WeatherSkeleton.tsx

import GlassCard from "../GlassCard";

export default function WeatherSkeleton() {
  return (
    <div className="p-8 max-w-md mx-auto text-white space-y-6 animate-pulse">
      {/* Поиск */}
      <div className="h-12 bg-white/10 rounded-2xl" />

      {/* Главная карточка */}
      <GlassCard className="p-6 h-40">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-white/10 rounded-3xl" />
          ))}
        </div>
      </GlassCard>

      <div className="flex gap-3 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="min-w-[60px] h-28 bg-white/10 rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
