import { mapOpenWeatherIcon } from "@/utils/weatherIcons";

type Props = {
  icon: string;
  alt?: string;
  className?: string;
};

export default function WeatherIcon({ icon, alt = "", className }: Props) {
  const mappedIcon = mapOpenWeatherIcon(icon); 
  const src = `/weather-icons/${mappedIcon}.svg`; 
  return <img src={src} alt={alt || icon} className={className} />;
}
