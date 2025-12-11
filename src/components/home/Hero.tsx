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
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // -----------------------------
  // Auto Slide Logic (Fixed)
  // -----------------------------
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  // Pause on hover/touch
  const handlePause = () => {
    setPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    setPaused(false);
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* TEXT SECTION */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Professional Washing Machine
              <br />
              <span className="text-primary">Repair & Service</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              At SIEMENS, we understand how inconvenient a faulty washing machine can be. 
              Our skilled technicians have years of experience working with all types and brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a href="tel:7710074028">
                <Button variant="default" size="lg" className="gap-2 px-8">
                  <Phone className="w-5 h-5" />
                  Need urgent service? Call 7710074028
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {[
                { icon: Shield, label: "90-Day Warranty" },
                { icon: CheckCircle2, label: "Genuine Parts" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE CAROUSEL */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className="relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-2xl shadow-lg"
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
              onTouchStart={handlePause}
              onTouchEnd={handleResume}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Washing machine repair slide ${index + 1}`}
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
                        : "bg-background/60"
                    }`}
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
