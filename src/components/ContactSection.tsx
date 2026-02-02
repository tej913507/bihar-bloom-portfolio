import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Urmila Bhawan, Ward No. 09',
      subValue: 'Araria, Bihar 854311, India',
      href: 'https://maps.google.com/?q=Araria,Bihar,India',
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 8427584507',
      subValue: 'Available 10 AM - 8 PM IST',
      href: 'tel:+918427584507',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'aws.anu.co@gmail.com',
      subValue: 'I typically respond within 24 hours',
      href: 'mailto:aws.anu.co@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project idea, want to collaborate, or just want to say hello—I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Address' ? '_blank' : undefined}
                rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-foreground font-medium mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.subValue}</p>
              </a>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative bg-card rounded-2xl border border-border p-8 lg:p-12 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 100 Q100 50, 200 100 T400 100" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M0 120 Q100 70, 200 120 T400 120" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M0 80 Q100 30, 200 80 T400 80" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm always excited to work on new projects and learn new things. 
                Let's create something beautiful together!
              </p>
              <a
                href="mailto:aws.anu.co@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <Send size={20} />
                Send me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
