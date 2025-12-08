import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">Same-Day Service Available</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up tracking-tight">
            We Fix What
            <br />
            <span className="gradient-text">Powers Your Home</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
            Expert repair for all major appliances. Fast diagnosis, transparent pricing, and a satisfaction guarantee that puts your home first.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
            <a href="tel:+919876543210">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                Call +91-9876543210
              </Button>
            </a>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in delay-300">
            {[
              { icon: Shield, label: "Guaranteed Work" },
              { icon: Clock, label: "Same-Day Service" },
              { icon: Award, label: "Certified Experts" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in delay-400">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Cities Covered" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
