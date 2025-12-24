import { GraduationCap, Code2, Brain, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const highlights = [
    { icon: Code2, label: "Full-Stack Dev" },
    { icon: Brain, label: "Machine Learning" },
    { icon: Sparkles, label: "Problem Solver" },
  ];

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
      className={`py-24 px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About Me
          </h2>

          {/* Main About Grid */}
          <div className="grid lg:grid-cols-5 gap-8 mb-16">
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

          {/* Education Section */}
          <div className="gradient-card rounded-3xl p-8 md:p-10 shadow-elegant">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/20 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative bg-secondary/30 rounded-xl p-6 border border-border/50 hover:border-accent/50 transition-smooth hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 pr-10">
                    {edu.degree}
                  </h4>
                  <p className="text-accent font-medium mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {edu.location}
                    </span>
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
