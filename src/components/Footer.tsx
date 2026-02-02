import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
              S
            </div>
            <p className="text-sm text-background/70">
              © {currentYear} Saurav Singh. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <p className="flex items-center gap-2 text-sm text-background/70">
            Made with <Heart size={16} className="text-primary fill-primary" /> in Bihar, India
          </p>

          {/* Cultural note */}
          <p className="text-xs text-background/50 italic">
            Inspired by Madhubani Art 🎨
          </p>
        </div>

        {/* Decorative border */}
        <div className="mt-6 pt-6 border-t border-background/10">
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['hsl(var(--madhubani-red))', 'hsl(var(--madhubani-indigo))', 'hsl(var(--madhubani-gold))', 'hsl(var(--madhubani-red))', 'hsl(var(--madhubani-indigo))'][i],
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
