export default function NoiseLayer() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{
        backgroundImage: "url('/noise.png')",
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
