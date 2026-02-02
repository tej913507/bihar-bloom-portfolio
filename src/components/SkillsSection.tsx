import MadhubaniBorder from './MadhubaniBorder';

interface Skill {
  name: string;
  level: 'learning' | 'familiar' | 'proficient';
  icon: string;
  category: 'frontend' | 'language' | 'design' | 'tools';
}

const skills: Skill[] = [
  { name: 'HTML', level: 'proficient', icon: '🌐', category: 'frontend' },
  { name: 'CSS', level: 'proficient', icon: '🎨', category: 'frontend' },
  { name: 'JavaScript', level: 'familiar', icon: '⚡', category: 'language' },
  { name: 'Python', level: 'learning', icon: '🐍', category: 'language' },
  { name: 'Figma', level: 'familiar', icon: '✏️', category: 'tools' },
  { name: 'UI Design', level: 'familiar', icon: '🖼️', category: 'design' },
  { name: 'Color Theory', level: 'familiar', icon: '🌈', category: 'design' },
  { name: 'Responsive Design', level: 'proficient', icon: '📱', category: 'frontend' },
  { name: 'Front-End Dev', level: 'familiar', icon: '💻', category: 'frontend' },
];

const levelColors = {
  learning: 'border-accent text-accent',
  familiar: 'border-secondary text-secondary',
  proficient: 'border-primary text-primary',
};

const levelLabels = {
  learning: 'Learning',
  familiar: 'Familiar',
  proficient: 'Proficient',
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="madhubani-pattern" patternUnits="userSpaceOnUse" width="50" height="50">
              <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="25" cy="25" r="12" stroke="currentColor" strokeWidth="0.3" fill="none" />
              <circle cx="25" cy="25" r="5" stroke="currentColor" strokeWidth="0.2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#madhubani-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Skills & Technologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I <span className="text-secondary">Work With</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A growing toolkit of technologies and design principles that I'm mastering through consistent practice and project-based learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card relative bg-card rounded-xl p-6 border border-border group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Madhubani-inspired border (visible on hover) */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <MadhubaniBorder variant={skill.level === 'proficient' ? 'default' : skill.level === 'familiar' ? 'indigo' : 'gold'} />
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {skill.name}
              </h3>

              {/* Level Badge */}
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${levelColors[skill.level]}`}>
                {levelLabels[skill.level]}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {Object.entries(levelLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full border-2 ${levelColors[key as keyof typeof levelColors].replace('text-', 'bg-')}`} />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
