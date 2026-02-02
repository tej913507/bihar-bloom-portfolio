import profilePhoto from '@/assets/profile-photo.jpg';
import MadhubaniPatterns from './MadhubaniPatterns';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Patterns */}
      <MadhubaniPatterns />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Opportunities
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="text-primary relative">
                Saurav Singh
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent opacity-50" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0, 100 8 T200 8" stroke="currentColor" strokeWidth="3" fill="none" className="ink-stroke" />
                </svg>
              </span>
            </h1>

            {/* Subtitle Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                🚀 Student at Apna College
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                🐍 Learning Python
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                💡 Building Projects
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              A curious learner from Bihar, building my path in web development through hands-on practice. 
              From HTML basics to interactive UIs, I embrace every challenge as a stepping stone toward becoming a skilled front-end developer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground rounded-lg font-medium hover:bg-foreground/5 transition-all"
              >
                Learn More
                <ArrowDown size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="mailto:aws.anu.co@gmail.com"
                className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-accent/10" />
              
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={profilePhoto}
                  alt="Saurav Singh - Student Developer from Bihar"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-background border-2 border-primary rounded-full shadow-lg">
                <span className="text-sm font-medium text-foreground">📍 Bihar, India</span>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-accent float-gentle" />
              <div className="absolute bottom-1/4 -left-4 w-4 h-4 rounded-full bg-secondary float-gentle-reverse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
