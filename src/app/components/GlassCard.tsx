// src/app/components/GlassCard.tsx

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className = "",
  hover = false 
}: GlassCardProps) {
  return (
    <div 
      className={`
        rounded-2xl
        border border-white/20
        shadow-2xl
        ${hover ? 'hover:bg-white/15 transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
      style={{
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      {children}
    </div>
  );
}