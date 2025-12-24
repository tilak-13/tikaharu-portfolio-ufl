import { Code2, Globe, Brain, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["ReactJS", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Neural Networks", "Computer Vision"],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "Github", "MongoDB", "PostgreSQL", "AWS"],
    },
  ];

  return (
    <section id="skills" ref={ref} className={`py-20 px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-elegant transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-[#ff6b6b]" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-[#ff6b6b] hover:text-white transition-all duration-300"
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
