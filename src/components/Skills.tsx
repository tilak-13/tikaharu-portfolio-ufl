import { Code2, Globe, Brain, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const skillCategories = [
    {
      icon: Code2,
    },
    {
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
