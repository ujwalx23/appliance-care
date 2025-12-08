import { Shield, Clock, IndianRupee, Wrench, Star, Users } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Certified Technicians",
    description: "Factory-trained experts with years of hands-on experience.",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Same-day service in most areas. We value your time.",
  },
  {
    icon: IndianRupee,
    title: "Upfront Pricing",
    description: "No hidden fees. Get a quote before any work begins.",
  },
  {
    icon: Shield,
    title: "Warranty Included",
    description: "All repairs backed by our 90-day service warranty.",
  },
  {
    icon: Star,
    title: "All Brands",
    description: "We service Indian and imported brands with genuine parts.",
  },
  {
    icon: Users,
    title: "10K+ Customers",
    description: "Trusted by thousands of homes across India.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Built on <span className="gradient-text">Trust</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We've earned the trust of thousands of Indian homes through quality service and genuine care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
