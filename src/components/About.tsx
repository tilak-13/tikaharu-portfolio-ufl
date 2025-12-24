import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// Import gallery images
import gatorImg from "@/assets/about-gallery/gator.jpg";
import manchesterImg from "@/assets/about-gallery/manchester.jpg";
import nepalFlagImg from "@/assets/about-gallery/nepal-flag.jpg";
import suitImg from "@/assets/about-gallery/suit.jpg";
import kimonoImg from "@/assets/about-gallery/kimono.jpg";
import tajMahalImg from "@/assets/about-gallery/taj-mahal.jpg";
import capitolImg from "@/assets/about-gallery/capitol.jpg";

const galleryImages = [
  { src: kimonoImg, alt: "Tikaharu in traditional Japanese kimono" },
  { src: gatorImg, alt: "Tikaharu at UF Bull Gator statue" },
  { src: manchesterImg, alt: "Tikaharu with Manchester City flag" },
  { src: nepalFlagImg, alt: "Tikaharu with Nepal flag" },
  { src: suitImg, alt: "Tikaharu in formal attire" },
  { src: tajMahalImg, alt: "Tikaharu at Taj Mahal" },
  { src: capitolImg, alt: "Tikaharu at US Capitol" },
];

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Beyond the Code
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Get to know the person behind the pixels
          </p>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Carousel */}
            <div className="relative group">
              <div className="gradient-card rounded-3xl p-4 shadow-elegant">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  {galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                        index === currentIndex 
                          ? "opacity-100 scale-100" 
                          : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "bg-accent w-6" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Paragraphs */}
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
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  Fun fact about my name: "Tikaharu" tends to confuse a lot of people 😄. 
                  It's actually a mix of two cultures — "Tika" comes from a Nepali word, 
                  and "Haru" is inspired by Japan, where I was born. And before you ask… 
                  no, I don't speak Japanese 😂.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Outside of coding, I'm a huge sports enthusiast. You'll usually find me 
                  watching football (or soccer, as it's called here in the US), cricket, 
                  basketball, baseball, or even a good game of chess. I also love spending 
                  my downtime watching movies and TV series — both Bollywood and Hollywood — 
                  because a good story is just as exciting as a good algorithm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
