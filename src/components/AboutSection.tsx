import { BookOpen, Code, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Self-taught through YouTube and hands-on practice',
    },
    {
      icon: Code,
      title: 'Web Developer',
      description: 'Building responsive and interactive websites',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Dedicated to craft and cultural roots',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Aspiring to become a skilled front-end developer',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Journey in <span className="text-primary">Tech</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative p-8 bg-card rounded-2xl border border-border shadow-sm">
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full text-primary/30">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="16" cy="16" r="3" fill="currentColor" />
                </svg>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                I'm <strong className="text-primary">Saurav Singh</strong>, a student at{' '}
                <strong>Apna College</strong>, Patna, Bihar, India. Currently pursuing a{' '}
                <strong>Student Internship (Part-time, Remote)</strong> since January 2024, 
                I'm focused on building strong fundamentals in web development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey began with curiosity—learning HTML, CSS, and JavaScript from scratch 
                through YouTube tutorials and hands-on practice. Every line of code I write is 
                a step toward understanding how to create <em>responsive designs</em>,{' '}
                <em>interactive UIs</em>, and <em>visually appealing websites</em>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in the rich cultural heritage of Bihar, I bring a unique perspective to 
                my work—blending traditional aesthetics with modern technology. With a learner 
                mindset and long-term vision, I'm committed to becoming a skilled front-end 
                developer who creates meaningful digital experiences.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-4 border-primary">
              <p className="text-xl italic text-muted-foreground font-display">
                "Consistency and curiosity are my greatest tools. Every day is an opportunity to grow."
              </p>
              <cite className="text-sm text-primary mt-2 block not-italic">— Saurav Singh</cite>
            </blockquote>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
