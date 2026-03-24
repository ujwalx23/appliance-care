import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Washing Machine Repair",
    oldPrice: 399,
    newPrice: 199,
    features: [
      "Inspection of your washing machine",
      "Identify issues",
      "Best suggestion to fix the problem",
      "Any extra parts will have an additional cost",
    ],
  },
  {
    title: "Washing Machine Service",
    oldPrice: 399,
    newPrice: 249,
    features: [
      "Cleaning of drum, dispenser, outlet pipe, and outer body",
      "Removal of debris and coins",
      "Pre and post check of all functions",
    ],
    popular: true,
  },
  {
    title: "Washing Machine Installation",
    oldPrice: 699,
    newPrice: 549,
    features: [
      "Assembly and installation at the right location",
      "Checking all washing machine settings",
      "Spare parts not included",
    ],
  },
  {
    title: "Front Load Washing Machine Repair",
    oldPrice: 399,
    newPrice: 199,
    features: [
      "Complete inspection",
      "Identify issues",
      "Best repair suggestion",
      "Extra parts charged separately",
    ],
  },
  {
    title: "Top Load Washing Machine Repair",
    oldPrice: 399,
    newPrice: 199,
    features: [
      "Complete inspection",
      "Identify issues",
      "Best repair suggestion",
      "Extra parts charged separately",
    ],
  },
  {
    title: "Fully Automatic Washing Machine Repair",
    oldPrice: 399,
    newPrice: 199,
    features: [
      "Inspection of your fully automatic washing machine",
      "Identify problems",
      "Suggest solutions",
      "Extra parts not included",
    ],
  },
];

const PricingCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Washing Machine Repair Service Pricing & Plans
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing with no hidden costs. Book now and get same-day service!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl border p-6 transition-shadow hover:shadow-lg animate-fade-in ${
                plan.popular ? "border-primary shadow-md" : "border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-foreground mb-4">{plan.title}</h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-primary">₹{plan.newPrice}</span>
                <span className="text-lg text-muted-foreground line-through">₹{plan.oldPrice}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="tel:7977339435" className="block">
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
