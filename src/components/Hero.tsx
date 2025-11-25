import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden dark:gradient-hero bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 dark:block hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-slide-up">
            <div className="w-60 h-60 mx-auto rounded-full border-4 border-accent shadow-elegant">
              <img 
                src={profilePicture} 
                alt="Tikaharu Sharma - Software Engineer" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in dark:text-primary-foreground text-foreground">
            Hi, I'm <span className="text-accent">Tikaharu Sharma</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 animate-fade-in font-light dark:text-primary-foreground/90 text-muted-foreground" style={{ animationDelay: "0.2s" }}>
            Software Engineer & Machine Learning Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-hover transition-smooth group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 bg-primary-foreground text-primary hover:bg-transparent transition-smooth dark:border-primary-foreground dark:hover:text-primary-foreground border-primary hover:text-primary-foreground hover:bg-primary"
              onClick={() => window.open("/TIKAHARU_SHARMA_RESUME.pdf", "_blank")}
            >
              Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center dark:border-primary-foreground/50 border-primary/50">
          <div className="w-1.5 h-3 rounded-full mt-2 dark:bg-primary-foreground/50 bg-primary/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
