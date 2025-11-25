import { Code2, Globe, Brain, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "JavaScript", "C++"],
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: ["ReactJS", "Node.js", "Django", "TensorFlow", "Keras", "Scikit-Learn"],
    },
    {
      title: "Libraries & Databases",
      icon: Brain,
      skills: ["Panda", "NumPy", "SQL", "PostgreSQL"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Github", "Jupyter", "Docker", "AWS"],
    },
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-smooth group"
              >
                <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <category.icon className="h-7 w-7 text-accent" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag px-3 py-1.5 text-accent text-sm rounded-lg font-medium cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
