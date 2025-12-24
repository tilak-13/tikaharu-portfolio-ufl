import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect, useRef } from "react";
import hireNepalImg from "@/assets/hire-nepal.jpg";
import fashionRecommenderImg from "@/assets/fashion-recommender.jpg";
import algorithmVisualizerImg from "@/assets/algorithm-visualizer.jpg";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Hire Nepal",
      description: "ML-powered job portal featuring intelligent resume analysis and personalized job recommendations. Built with advanced machine learning algorithms to match candidates with ideal opportunities.",
      tags: ["Machine Learning", "Python", "NLP", "ReactJS"],
      gradient: "from-blue-500 to-purple-600",
      image: hireNepalImg
    },
    {
      title: "Fashion Recommender System",
      description: "Sophisticated recommendation engine that suggests visually similar fashion products using ML-based image similarity and deep learning techniques for accurate matching.",
      tags: ["Deep Learning", "Computer Vision", "Python", "TensorFlow"],
      gradient: "from-pink-500 to-rose-600",
      image: fashionRecommenderImg
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "Interactive educational tool built with ReactJS that brings sorting algorithms to life through real-time visualization, helping users understand complex algorithmic concepts.",
      tags: ["ReactJS", "JavaScript", "Algorithms", "Data Structures"],
      gradient: "from-green-500 to-teal-600",
      image: algorithmVisualizerImg
    },
    {
      title: "N-Queen Visualizer",
      description: "Elegant visualization of the classic N-Queen problem using backtracking algorithms. Built with ReactJS to demonstrate algorithmic problem-solving in an intuitive way.",
      tags: ["ReactJS", "Algorithms", "Backtracking", "JavaScript"],
      gradient: "from-orange-500 to-amber-600",
      image: algorithmVisualizerImg
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>

          {/* Carousel Container */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/90 hover:bg-background text-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/90 hover:bg-background text-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Track */}
            <div 
              ref={carouselRef}
              className="overflow-hidden rounded-2xl"
            >
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="gradient-card rounded-2xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
                      {/* Project header with gradient */}
                      <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                      
                      <div className="grid md:grid-cols-2">
                        {/* Project image */}
                        <div className="overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        
                        <div className="p-8 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-4">
                            {project.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed mb-6">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-accent w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
