import { Phone, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Average response time: 30 minutes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Ready to Get Your
            <br />
            <span className="gradient-text">Appliances Fixed?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Don't let a broken appliance disrupt your day. Our expert technicians are standing by to help you get back to normal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919876543210">
              <Button variant="hero" size="xl" className="glow-primary">
                <Phone className="w-5 h-5" />
                Get Help Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Book Online
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
