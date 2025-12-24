import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";
import hireNepalImg from "@/assets/hire-nepal.jpg";
import fashionRecommenderImg from "@/assets/fashion-recommender.png";
import algorithmVisualizerImg from "@/assets/algorithm-visualizer.jpg";
import duelGameImg from "@/assets/duel-game.png";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    },
    {
      title: "Duel Game Battle",
      description: "Duel Game Package is a multiplayer game where 2 players battle against each other in three rounds with different games and try to outscore their opponents. The player with most game wins will be the winner of the series.",
      tags: ["C++", "SFML", "Game Development", "Multiplayer"],
      gradient: "from-red-500 to-emerald-600",
      image: duelGameImg
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getCardStyle = (index: number) => {
    const total = projects.length;
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite loop effect
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isCenter = diff === 0;
    const isLeft = diff === -1 || (currentIndex === 0 && index === total - 1 && diff !== 0);
    const isRight = diff === 1 || (currentIndex === total - 1 && index === 0 && diff !== 0);
    const isVisible = Math.abs(diff) <= 1;

    let translateX = 0;
    let scale = 0.75;
    let opacity = 0;
    let zIndex = 0;

    if (isCenter) {
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 30;
    } else if (diff === -1) {
      translateX = -85;
      scale = 0.8;
      opacity = 0.6;
      zIndex = 20;
    } else if (diff === 1) {
      translateX = 85;
      scale = 0.8;
      opacity = 0.6;
      zIndex = 20;
    } else if (diff === -2 || (diff > 0 && diff === total - 2)) {
      translateX = -120;
      scale = 0.6;
      opacity = 0.3;
      zIndex = 10;
    } else if (diff === 2 || (diff < 0 && diff === -(total - 2))) {
      translateX = 120;
      scale = 0.6;
      opacity = 0.3;
      zIndex = 10;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>

          {/* Carousel Container */}
          <div 
            className="relative h-[500px] md:h-[450px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-background/90 hover:bg-background text-foreground p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-background/90 hover:bg-background text-foreground p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="absolute w-[90%] md:w-[600px] cursor-pointer"
                  style={getCardStyle(index)}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="gradient-card rounded-2xl overflow-hidden shadow-elegant">
                    {/* Project header with gradient */}
                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                    
                    {/* Project image */}
                    <div className="overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-accent mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-lg">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
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
