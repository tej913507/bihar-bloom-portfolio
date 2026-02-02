import { useEffect, useRef } from 'react';

interface MadhubaniPatternsProps {
  className?: string;
}

const MadhubaniPatterns = ({ className = '' }: MadhubaniPatternsProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('.animate-path');
    paths.forEach((path, index) => {
      const element = path as SVGPathElement;
      const length = element.getTotalLength();
      element.style.strokeDasharray = `${length}`;
      element.style.strokeDashoffset = `${length}`;
      element.style.animation = `ink-draw ${2 + index * 0.3}s ease-out ${index * 0.2}s forwards`;
    });
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top Left Floral Pattern */}
      <svg
        ref={svgRef}
        className="absolute -top-20 -left-20 w-80 h-80 opacity-20 float-gentle"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lotus-like flower */}
        <path
          className="animate-path"
          d="M100 20 C120 50, 150 60, 150 100 C150 140, 120 160, 100 180 C80 160, 50 140, 50 100 C50 60, 80 50, 100 20"
          stroke="hsl(var(--madhubani-red))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="animate-path"
          d="M100 40 C110 60, 130 70, 130 100 C130 130, 110 145, 100 160 C90 145, 70 130, 70 100 C70 70, 90 60, 100 40"
          stroke="hsl(var(--madhubani-indigo))"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Petals */}
        <circle cx="100" cy="100" r="15" stroke="hsl(var(--madhubani-gold))" strokeWidth="2" fill="none" className="animate-path" />
        <circle cx="100" cy="100" r="8" stroke="hsl(var(--madhubani-red))" strokeWidth="1.5" fill="hsl(var(--madhubani-gold) / 0.3)" className="animate-path" />
        {/* Decorative lines */}
        <line x1="100" y1="20" x2="100" y2="40" stroke="hsl(var(--madhubani-red))" strokeWidth="1" className="animate-path" />
        <line x1="50" y1="100" x2="70" y2="100" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1" className="animate-path" />
        <line x1="130" y1="100" x2="150" y2="100" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1" className="animate-path" />
      </svg>

      {/* Top Right Peacock Feather Pattern */}
      <svg
        className="absolute -top-10 -right-10 w-72 h-72 opacity-15 float-gentle-reverse"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Peacock eye */}
        <ellipse cx="100" cy="60" rx="30" ry="40" stroke="hsl(var(--madhubani-indigo))" strokeWidth="2" fill="none" className="animate-path" />
        <ellipse cx="100" cy="60" rx="20" ry="28" stroke="hsl(var(--madhubani-gold))" strokeWidth="1.5" fill="none" className="animate-path" />
        <ellipse cx="100" cy="60" rx="10" ry="15" stroke="hsl(var(--madhubani-red))" strokeWidth="2" fill="hsl(var(--madhubani-indigo) / 0.2)" className="animate-path" />
        {/* Feather lines */}
        <path d="M100 100 Q90 130, 70 180" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1.5" fill="none" className="animate-path" />
        <path d="M100 100 Q110 130, 130 180" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1.5" fill="none" className="animate-path" />
        <path d="M100 100 Q100 140, 100 190" stroke="hsl(var(--madhubani-red))" strokeWidth="1" fill="none" className="animate-path" />
      </svg>

      {/* Bottom Left Fish Pattern */}
      <svg
        className="absolute bottom-20 -left-10 w-64 h-64 opacity-15 float-gentle"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fish body */}
        <path
          d="M40 100 C60 70, 120 70, 150 100 C120 130, 60 130, 40 100"
          stroke="hsl(var(--madhubani-red))"
          strokeWidth="2"
          fill="none"
          className="animate-path"
        />
        {/* Fish scales pattern */}
        <path d="M70 90 Q80 100, 70 110" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1" fill="none" className="animate-path" />
        <path d="M90 90 Q100 100, 90 110" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1" fill="none" className="animate-path" />
        <path d="M110 90 Q120 100, 110 110" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1" fill="none" className="animate-path" />
        {/* Tail */}
        <path d="M150 100 L180 80 L180 120 Z" stroke="hsl(var(--madhubani-gold))" strokeWidth="1.5" fill="none" className="animate-path" />
        {/* Eye */}
        <circle cx="55" cy="100" r="5" stroke="hsl(var(--madhubani-black))" strokeWidth="1" fill="hsl(var(--madhubani-gold))" className="animate-path" />
      </svg>

      {/* Bottom Right Geometric Pattern */}
      <svg
        className="absolute -bottom-10 -right-20 w-80 h-80 opacity-10 float-gentle-reverse"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric squares */}
        <rect x="20" y="20" width="160" height="160" stroke="hsl(var(--madhubani-red))" strokeWidth="2" fill="none" className="animate-path" />
        <rect x="40" y="40" width="120" height="120" stroke="hsl(var(--madhubani-indigo))" strokeWidth="1.5" fill="none" className="animate-path" />
        <rect x="60" y="60" width="80" height="80" stroke="hsl(var(--madhubani-gold))" strokeWidth="1.5" fill="none" className="animate-path" />
        <rect x="80" y="80" width="40" height="40" stroke="hsl(var(--madhubani-red))" strokeWidth="2" fill="none" className="animate-path" />
        {/* Corner decorations */}
        <circle cx="20" cy="20" r="5" stroke="hsl(var(--madhubani-gold))" strokeWidth="1" fill="hsl(var(--madhubani-red) / 0.3)" className="animate-path" />
        <circle cx="180" cy="20" r="5" stroke="hsl(var(--madhubani-gold))" strokeWidth="1" fill="hsl(var(--madhubani-red) / 0.3)" className="animate-path" />
        <circle cx="20" cy="180" r="5" stroke="hsl(var(--madhubani-gold))" strokeWidth="1" fill="hsl(var(--madhubani-red) / 0.3)" className="animate-path" />
        <circle cx="180" cy="180" r="5" stroke="hsl(var(--madhubani-gold))" strokeWidth="1" fill="hsl(var(--madhubani-red) / 0.3)" className="animate-path" />
      </svg>

      {/* Floating decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/20 float-gentle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/30 float-gentle-reverse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-secondary/15 float-gentle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-madhubani-gold/25 float-gentle-reverse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default MadhubaniPatterns;
