interface MadhubaniBorderProps {
  className?: string;
  variant?: 'default' | 'gold' | 'indigo';
}

const MadhubaniBorder = ({ className = '', variant = 'default' }: MadhubaniBorderProps) => {
  const colors = {
    default: {
      outer: 'hsl(var(--madhubani-red))',
      inner: 'hsl(var(--madhubani-indigo))',
      accent: 'hsl(var(--madhubani-gold))',
    },
    gold: {
      outer: 'hsl(var(--madhubani-gold))',
      inner: 'hsl(var(--madhubani-red))',
      accent: 'hsl(var(--madhubani-indigo))',
    },
    indigo: {
      outer: 'hsl(var(--madhubani-indigo))',
      inner: 'hsl(var(--madhubani-gold))',
      accent: 'hsl(var(--madhubani-red))',
    },
  };

  const { outer, inner, accent } = colors[variant];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <rect
        x="1"
        y="1"
        width="98"
        height="98"
        rx="4"
        stroke={outer}
        strokeWidth="0.5"
        fill="none"
        className="ink-stroke"
        style={{ animationDelay: '0s' }}
      />
      {/* Inner border */}
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="3"
        stroke={inner}
        strokeWidth="0.3"
        fill="none"
        className="ink-stroke"
        style={{ animationDelay: '0.3s' }}
      />
      {/* Corner decorations */}
      <circle cx="5" cy="5" r="1.5" fill={accent} className="ink-stroke" style={{ animationDelay: '0.6s' }} />
      <circle cx="95" cy="5" r="1.5" fill={accent} className="ink-stroke" style={{ animationDelay: '0.7s' }} />
      <circle cx="5" cy="95" r="1.5" fill={accent} className="ink-stroke" style={{ animationDelay: '0.8s' }} />
      <circle cx="95" cy="95" r="1.5" fill={accent} className="ink-stroke" style={{ animationDelay: '0.9s' }} />
    </svg>
  );
};

export default MadhubaniBorder;
