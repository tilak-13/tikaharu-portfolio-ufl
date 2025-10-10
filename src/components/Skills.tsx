import { Code2, Globe, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "C++"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["ReactJS", "Node.js", "Express", "HTML", "CSS"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "Keras", "Scikit-Learn"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "SQL", "Docker", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-smooth group"
              >
                <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <category.icon className="h-7 w-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
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
