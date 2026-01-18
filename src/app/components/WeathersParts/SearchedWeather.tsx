"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchedWeather() {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentCity = search.trim();
    if (!currentCity) return;
    router.push(`/weather?city=${currentCity}`);
  };

  return (
<form onSubmit={handleSubmit} className="mb-6">
  <div className="relative">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder="Search for a city..."
      className={`
        w-full px-4 py-3 pl-11
        rounded-2xl
        border
        text-white placeholder-white/50
        transition-all duration-300
        outline-none
        ${isFocused ? 'border-white/40' : 'border-white/20'}
      `}
      style={{
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        backgroundColor: isFocused 
          ? 'rgba(255, 255, 255, 0.15)' 
          : 'rgba(255, 255, 255, 0.1)',
      }}
    />
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</form>
  );
}