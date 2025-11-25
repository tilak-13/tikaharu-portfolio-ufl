import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Hire Nepal",
      description: "ML-powered job portal featuring intelligent resume analysis and personalized job recommendations. Built with advanced machine learning algorithms to match candidates with ideal opportunities.",
      tags: ["Machine Learning", "Python", "NLP", "ReactJS"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Fashion Recommender System",
      description: "Sophisticated recommendation engine that suggests visually similar fashion products using ML-based image similarity and deep learning techniques for accurate matching.",
      tags: ["Deep Learning", "Computer Vision", "Python", "TensorFlow"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "Interactive educational tool built with ReactJS that brings sorting algorithms to life through real-time visualization, helping users understand complex algorithmic concepts.",
      tags: ["ReactJS", "JavaScript", "Algorithms", "Data Structures"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "N-Queen Visualizer",
      description: "Elegant visualization of the classic N-Queen problem using backtracking algorithms. Built with ReactJS to demonstrate algorithmic problem-solving in an intuitive way.",
      tags: ["ReactJS", "Algorithms", "Backtracking", "JavaScript"],
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-hover transition-smooth group hover:-translate-y-2 hover:backdrop-blur-xl"
                style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                {/* Project header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="leading-relaxed mb-6" style={{ color: 'hsl(210, 20%, 85%)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth group/btn"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Demo
                    </Button>
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

export default Projects;
