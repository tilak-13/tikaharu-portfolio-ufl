import { Code2, Brain, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const highlights = [
    { icon: Code2, label: "Full-Stack Dev" },
    { icon: Brain, label: "Machine Learning" },
    { icon: Sparkles, label: "Problem Solver" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About Me
          </h2>

          {/* Main About Grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Profile Card */}
            <div className="lg:col-span-2 flex flex-col items-center">
              <div className="gradient-card rounded-3xl p-6 shadow-elegant w-full max-w-sm">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg">
                    <img
                      src={profilePicture}
                      alt="Tikaharu Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Open to Work
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-2">
                  Tikaharu Sharma
                </h3>
                <p className="text-accent text-sm font-medium text-center mb-6">
                  Software Engineer
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full text-xs text-muted-foreground"
                    >
                      <item.icon className="w-3.5 h-3.5 text-accent" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Bio + Stats */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="gradient-card rounded-2xl p-6 shadow-elegant border-l-4 border-accent">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm a passionate Computer Engineer currently pursuing my
                    Master's degree in Computer & Information Science at the
                    University of Florida, where I'm deepening my expertise in
                    Software Engineering and Machine Learning.
                  </p>
                </div>

                <div className="gradient-card rounded-2xl p-6 shadow-elegant border-l-4 border-accent/50">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    With a strong foundation in full-stack development and
                    machine learning, I love building scalable web applications
                    and intelligent systems that solve real-world problems. My
                    journey has been driven by curiosity and a desire to create
                    technology that makes a meaningful impact.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center gradient-card rounded-xl p-4 shadow-elegant hover:shadow-hover transition-smooth">
                    <div className="text-3xl font-bold text-accent">2+</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center gradient-card rounded-xl p-4 shadow-elegant hover:shadow-hover transition-smooth">
                    <div className="text-3xl font-bold text-accent">10+</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Projects Built
                    </div>
                  </div>
                  <div className="text-center gradient-card rounded-xl p-4 shadow-elegant hover:shadow-hover transition-smooth">
                    <div className="text-3xl font-bold text-accent">5+</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Technologies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
