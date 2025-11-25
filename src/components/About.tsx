import { GraduationCap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const education = [
    {
      degree: "M.S. in Computer & Information Science",
      institution: "University of Florida",
      period: "Aug 2025 - May 2027",
      location: "Gainesville, FL, USA",
    },
    {
      degree: "B.E. in Computer Engineering",
      institution: "Pulchowk Campus, Tribhuvan University",
      period: "Nov 2019 - Apr 2024",
      location: "Kathmandu, Nepal",
    },
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>

          <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-elegant mb-12">
            <p className="text-lg leading-relaxed mb-6 dark:text-[hsl(210,20%,85%)] text-muted-foreground">
              I'm a passionate Computer Engineer currently pursuing my Master's degree in Computer & Information Science
              at the University of Florida, where I'm deepening my expertise in Software Engineering and Machine
              Learning.
            </p>
            <p className="text-lg leading-relaxed dark:text-[hsl(210,20%,85%)] text-muted-foreground">
              With a strong foundation in full-stack development and machine learning, I love building scalable web
              applications and intelligent systems that solve real-world problems. My journey has been driven by
              curiosity and a desire to create technology that makes a meaningful impact.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-accent" />
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-accent/30">
              {education.map((edu, index) => (
                <div key={index} className="mb-10 last:mb-0 relative transition-smooth hover:translate-x-2">
                  <div className="absolute -left-[33px] w-4 h-4 rounded-full bg-accent border-4 border-transparent"></div>

                  <div className="gradient-card rounded-xl p-6 shadow-elegant hover:shadow-hover transition-smooth">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-accent font-medium mb-1">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm dark:text-[hsl(210,20%,85%)] text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
