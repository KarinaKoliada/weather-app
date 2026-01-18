interface GradientLayerProps {
  weatherIcon: string;
}

export default function GradientLayer({ weatherIcon }: GradientLayerProps) {
  console.log("🎨 GradientLayer получил иконку:", weatherIcon);

  const isDay = weatherIcon.endsWith("d");
  const isNight = weatherIcon.endsWith("n");
  const weatherCode = weatherIcon.slice(0, 2);

  const getGradient = () => {
    if (weatherCode === "01" && isDay)
      return "from-sky-300 via-blue-400 to-blue-600";
    if (weatherCode === "01" && isNight)
      return "from-indigo-900 via-blue-900 to-slate-900";
    if (["02", "03", "04"].includes(weatherCode) && isDay)
      return "from-gray-300 via-slate-400 to-slate-600";
    if (["02", "03", "04"].includes(weatherCode) && isNight)
      return "from-slate-700 via-gray-800 to-slate-900";
    if (["09", "10"].includes(weatherCode) && isDay)
      return "from-slate-400 via-slate-600 to-slate-800";
    if (["09", "10"].includes(weatherCode) && isNight)
      return "from-slate-800 via-gray-900 to-black";
    if (weatherCode === "11")
      return isDay
        ? "from-slate-600 via-gray-700 to-slate-900"
        : "from-gray-900 via-slate-900 to-black";
    if (weatherCode === "13")
      return isDay
        ? "from-blue-100 via-blue-300 to-blue-500"
        : "from-blue-900 via-indigo-900 to-slate-900";
    if (weatherCode === "50")
      return isDay
        ? "from-gray-200 via-gray-400 to-gray-600"
        : "from-gray-700 via-gray-800 to-gray-900";
    return isDay
      ? "from-sky-400 via-blue-500 to-blue-700"
      : "from-indigo-900 via-blue-900 to-slate-900";
  };
  const gradient = getGradient();
  console.log("🌈 Применяем градиент:", gradient);
  return <div
    className={`absolute inset-0 bg-gradient-to-br transition-colors duration-1000 ${gradient}`}
  />;
}
