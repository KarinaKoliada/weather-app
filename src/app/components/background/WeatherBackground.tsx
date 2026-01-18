'use client';

import GradientLayer from './GradientLayer';
import NoiseLayer from './NoiseGrain';
import StarsEffect from './StarsEffect';

export default function WeatherBackground({ weatherIcon }: { weatherIcon: string }) {
  console.log('🌍 WeatherBackground получил иконку:', weatherIcon);

  const isNight = weatherIcon.endsWith('n');

  return (
    <div className="fixed inset-0 -z-10">
      <GradientLayer weatherIcon={weatherIcon} />
      <NoiseLayer />
      {isNight && <StarsEffect />}
    </div>
  );
}

