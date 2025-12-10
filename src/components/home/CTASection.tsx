import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Would you like to take service with us?
        </h2>
        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Fast and reliable washing machine repair service. Expert technicians to fix all issues. Book now!
        </p>
        <a href="tel:7710074028">
          <Button 
            variant="secondary" 
            size="lg" 
            className="gap-2 text-base px-8"
          >
            <Phone className="w-5 h-5" />
            Book Now - 7710074028
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
