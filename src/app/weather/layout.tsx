import WeatherBackground from "../components/background/WeatherBackground";

export default function WeatherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <WeatherBackground weatherIcon={''} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
