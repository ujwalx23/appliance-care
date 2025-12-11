import { useState, useEffect, useRef } from "react";
import { Phone, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // AUTO-SLIDE + TOUCH SWIPE
  useEffect(() => {
    const slider = sliderRef.current;

    let startX = 0;
    let isDragging = false;
    let currentTranslate = 0;
    let prevTranslate = -currentSlide * window.innerWidth;

    // Auto slide
    let autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    // Touch start
    const startDrag = (e) => {
      clearInterval(autoSlide);
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    // Touch move
    const drag = (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      currentTranslate = prevTranslate + diff;
      slider.style.transform = `translateX(${currentTranslate}px)`;
    };

    // Touch end
    const endDrag = () => {
      isDragging = false;
      const moved = currentTranslate - prevTranslate;

      if (moved < -50) {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      } else if (moved > 50) {
        setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      } else {
        slider.style.transform = `translateX(${prevTranslate}px)`;
      }

      // Restart auto-slide after 1s
      setTimeout(() => {
        autoSlide = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
      }, 1000);
    };

    slider.addEventListener("touchstart", startDrag);
    slider.addEventListener("touchmove", drag);
    slider.addEventListener("touchend", endDrag);

    return () => {
      slider.removeEventListener("touchstart", startDrag);
      slider.removeEventListener("touchmove", drag);
      slider.removeEventListener("touchend", endDrag);
      clearInterval(autoSlide);
    };
  }, [currentSlide]);

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT TEXT SIDE */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Professional Washing Machine
              <br />
              <span className="text-primary">Repair & Service</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-100">
              At SIEMENS, we understand how inconvenient a faulty washing machine can be. 
              Our skilled technicians have years of experience working with all types and brands of washing machines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up delay-200">
              <a href="tel:7710074028">
                <Button variant="default" size="lg" className="gap-2 text-base px-6 md:px-8 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Need urgent service? Call 7710074028
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 animate-fade-in delay-300">
              {[
                { icon: Shield, label: "90-Day Warranty" },
                { icon: CheckCircle2, label: "Genuine Parts" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-2xl shadow-lg">
              
              {/* SLIDER TRACK */}
              <div
                ref={sliderRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Professional washing machine repair service ${index + 1}`}
                    className="w-full h-auto flex-shrink-0"
                  />
                ))}
              </div>

              {/* INDICATORS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index 
                        ? "bg-primary w-6"
                        : "bg-background/60 hover:bg-background/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
