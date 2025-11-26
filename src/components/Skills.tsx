import { Code2, Globe, Brain, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Django", level: 75 },
      ],
    },
    {
      title: "Data & ML",
      icon: Brain,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-Learn", level: 80 },
        { name: "Keras", level: 75 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "PostgreSQL", level: 80 },
      ],
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-smooth"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
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
