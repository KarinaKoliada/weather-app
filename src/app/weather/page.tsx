import WeatherList from "../components/WeathersParts/WeatherList";

type PageProps = {
  searchParams: {
    city?: string;
  };
};

export default function WeatherPage({ searchParams }: PageProps) {
  return (
    <div className="relative z-10">
      <WeatherList searchParams={searchParams} />
    </div>
  );
}