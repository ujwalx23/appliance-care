import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Working Hours Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6 animate-fade-in">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Working Time: 8 AM – 10 PM</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Professional Washing Machine
            <br />
            <span className="text-primary">Repair & Service</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up delay-100">
            At WashingExpert, we understand how inconvenient a faulty washing machine can be. 
            Our skilled technicians have years of experience working with all types and brands of washing machines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-slide-up delay-200">
            <a href="tel:7710074028">
              <Button variant="default" size="lg" className="gap-2 text-base px-8">
                <Phone className="w-5 h-5" />
                Need urgent service? Call 7710074028
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-in delay-300">
            {[
              { icon: Clock, label: "30 Min Response" },
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
      </div>
    </section>
  );
};

export default Hero;
