import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 400" className="h-full">
          <path
            d="M100 0 L100 400"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="200" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="300" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-accent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {/* Experience Card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Card */}
            <div className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg pulse-dot" />

              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Student Internship
                    </h3>
                    <p className="text-lg text-primary font-medium">Apna College</p>
                  </div>
                  <span className="px-4 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    Jan 2024 – Present
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Remote, India
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" />
                    Part-time
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Focused on building strong fundamentals in web development, understanding responsive design principles, 
                  creating interactive UI components, and developing visually appealing websites. Learning through 
                  practical projects and continuous skill development.
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {['CSS', 'JavaScript', 'UI Design', 'Front-End Basics', 'Responsive Design'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future placeholder */}
          <div className="relative pl-20 mt-8">
            <div className="absolute left-6 top-4 w-5 h-5 rounded-full border-2 border-dashed border-muted-foreground/30" />
            <div className="p-6 border-2 border-dashed border-muted/50 rounded-2xl text-center">
              <p className="text-muted-foreground italic">
                More experiences coming soon as I continue to learn and grow... 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
