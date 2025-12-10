import { Clock, Shield, CheckCircle2, Wrench, IndianRupee, CreditCard } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Doorstep service in 30 minutes",
  },
  {
    icon: Shield,
    title: "90-Day service warranty",
  },
  {
    icon: CheckCircle2,
    title: "100% genuine spare parts",
  },
  {
    icon: Shield,
    title: "90-Day warranty on spare parts",
  },
  {
    icon: Wrench,
    title: "Trained technicians",
  },
  {
    icon: IndianRupee,
    title: "Lowest service charges",
  },
  {
    icon: CreditCard,
    title: "No hidden costs",
  },
  {
    icon: CheckCircle2,
    title: "No advance — Pay after service",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're committed to providing the best washing machine repair service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
