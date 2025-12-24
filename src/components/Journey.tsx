import { GraduationCap, Briefcase, School } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

type JourneyItem = {
  type: "education" | "work";
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
  isCurrent?: boolean;
};

const Journey = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const journeyItems: JourneyItem[] = [
    {
      type: "education",
      title: "M.S. in Computer & Information Science",
      organization: "University of Florida",
      location: "Gainesville, FL, USA",
      period: "Aug 2025 - May 2027",
      description:
        "Currently pursuing advanced studies in Computer Science with focus on Software Engineering and Machine Learning.",
      isCurrent: true,
    },
    {
      type: "work",
      title: "Software Developer",
      organization: "Danphe Software Labs",
      location: "Kathmandu, Nepal",
      period: "Jul 2024 - May 2025",
      description:
        "Built scalable web platforms using ReactJS and Node.js, developing robust backend APIs and creating responsive, user-friendly interfaces that enhanced user engagement and system performance.",
    },
    {
      type: "work",
      title: "Software Developer Intern",
      organization: "Danphe Software Labs",
      location: "Kathmandu, Nepal",
      period: "Apr 2024 - Jun 2024",
      description:
        "Learned how to create interactive front-end features with ReactJS, collaborating with cross-functional teams to deliver high-quality software solutions and implement modern web development best practices.",
    },
    {
      type: "education",
      title: "B.E. in Computer Engineering",
      organization: "Pulchowk Campus, Tribhuvan University",
      location: "Kathmandu, Nepal",
      period: "Nov 2019 - Apr 2024",
      description:
        "Completed undergraduate studies in Computer Engineering with coursework in Software Engineering, Artificial Intelligence, and Database Management Systems.",
    },
    {
      type: "education",
      title: "High School (+2 Science)",
      organization: "St. Xavier's College",
      location: "Kathmandu, Nepal",
      period: "Jun 2017 - Jul 2019",
      description:
        "Completed higher secondary education with a focus on Science, building a strong foundation in Mathematics and Physics.",
    },
  ];

  const getIcon = (type: "education" | "work") => {
    if (type === "education") {
      return GraduationCap;
    }
    return Briefcase;
  };

  return (
    <section
      id="journey"
      ref={ref}
      className={`py-24 px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            My Journey
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A timeline of my educational background and professional experience
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20" />

            <div className="space-y-12">
              {journeyItems.map((item, index) => {
                const Icon = getIcon(item.type);
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-smooth ${
                          item.isCurrent
                            ? "bg-accent animate-pulse"
                            : item.type === "education"
                            ? "bg-secondary border-2 border-accent/50"
                            : "bg-secondary border-2 border-accent/30"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            item.isCurrent ? "text-accent-foreground" : "text-accent"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                      }`}
                    >
                      <div
                        className={`gradient-card rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-smooth group hover:-translate-y-1 ${
                          item.isCurrent ? "border border-accent/30" : ""
                        }`}
                      >
                        {/* Current badge */}
                        {item.isCurrent && (
                          <span
                            className={`inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3`}
                          >
                            Current
                          </span>
                        )}

                        {/* Type badge */}
                        <span
                          className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
                            !item.isCurrent ? "" : "ml-2"
                          } ${
                            item.type === "education"
                              ? "bg-accent/10 text-accent"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {item.type === "education" ? "Education" : "Work"}
                        </span>

                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>

                        <p className="text-accent font-medium mb-1">
                          {item.organization}
                        </p>

                        <div
                          className={`flex flex-col gap-1 text-sm text-muted-foreground mb-4 ${
                            isLeft ? "md:items-end" : "md:items-start"
                          }`}
                        >
                          <span>{item.location}</span>
                          <span className="font-medium">{item.period}</span>
                        </div>

                        {item.description && (
                          <p
                            className={`text-sm text-muted-foreground leading-relaxed ${
                              isLeft ? "md:text-right" : "md:text-left"
                            }`}
                          >
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>

            {/* End node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-4">
              <div className="w-4 h-4 rounded-full bg-accent/30 border-2 border-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
