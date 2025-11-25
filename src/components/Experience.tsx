import { Briefcase } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const experiences = [
    {
      title: "Software Developer",
      company: "Danphe Software Labs",
      period: "Jul 2024 - May 2025",
      description:
        "Built scalable web platforms using ReactJS and Node.js, developing robust backend APIs and creating responsive, user-friendly interfaces that enhanced user engagement and system performance.",
    },
    {
      title: "Software Developer Intern",
      company: "Danphe Software Labs",
      period: "Apr 2024 - Jun 2024",
      description:
        "Learned how to create interactive front-end features with ReactJS, collaborating with cross-functional teams to deliver high-quality software solutions and implement modern web development best practices.",
    },
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className={`py-20 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-smooth group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent/20 transition-smooth">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <span className="text-accent font-medium">{exp.company}</span>
                      <span className="hidden sm:inline dark:text-[hsl(210,20%,85%)] text-muted-foreground">•</span>
                      <span className="dark:text-[hsl(210,20%,85%)] text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="leading-relaxed dark:text-[hsl(210,20%,85%)] text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
