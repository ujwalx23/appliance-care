import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Droplets, Thermometer, Wind, Zap, Shirt, CheckCircle2 } from "lucide-react";

const washingMachineServices = [
  {
    title: "Washing Machine Repair",
    price: 199,
    oldPrice: 399,
    description: "Complete inspection of your washing machine. Identify issues. Best suggestion to fix the problem.",
  },
  {
    title: "Washing Machine Service",
    price: 249,
    oldPrice: 399,
    description: "Cleaning of drum, dispenser, outlet pipe, and outer body. Removal of debris and coins.",
  },
  {
    title: "Front Load Washing Machine Repair",
    price: 199,
    oldPrice: 399,
    description: "Complete inspection and repair for front load washing machines of all brands.",
  },
  {
    title: "Top Load Washing Machine Repair",
    price: 199,
    oldPrice: 399,
    description: "Complete inspection and repair for top load washing machines of all brands.",
  },
  {
    title: "Fully Automatic Washing Machine Repair",
    price: 199,
    oldPrice: 399,
    description: "Inspection and repair for fully automatic washing machines.",
  },
  {
    title: "Washing Machine Installation",
    price: 549,
    oldPrice: 699,
    description: "Assembly and installation at the right location. Checking all washing machine settings.",
  },
];

const otherServices = [
  {
    icon: Thermometer,
    title: "Refrigerator Repair",
    description: "Professional refrigerator and freezer repair for single-door, double-door, side-by-side, and French door models.",
    issues: ["Not cooling properly", "Freezer not freezing", "Ice maker not working", "Water leaking", "Compressor issues"],
  },
  {
    icon: Wind,
    title: "AC Service & Repair",
    description: "Complete air conditioner service including installation, repair, and maintenance for split AC and window AC.",
    issues: ["Not cooling effectively", "Blowing warm air", "Water dripping", "Strange odors", "Gas refilling required"],
  },
  {
    icon: Zap,
    title: "Microwave Repair",
    description: "Quick microwave oven repair for all types - solo, grill, and convection microwaves.",
    issues: ["Not heating food", "Sparking inside", "Turntable not rotating", "Display not working", "Buttons unresponsive"],
  },
  {
    icon: Shirt,
    title: "Dryer Repair",
    description: "Professional dryer repair service for vented, condenser, and heat pump dryers.",
    issues: ["Not drying clothes", "Not turning on", "Overheating", "Making squeaking noises", "Taking too long to dry"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Professional appliance repair services at affordable prices. Same-day service available!
            </p>
            <a href="tel:7710074028">
              <Button variant="default" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Book a Service: 7710074028
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Washing Machine Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Washing Machine Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {washingMachineServices.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary">₹{service.price}</span>
                  <span className="text-muted-foreground line-through">₹{service.oldPrice}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <a href="tel:7710074028">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Book Now
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Other Appliance Services
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.issues.map((issue, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-secondary" />
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Need Emergency Repair?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Our technicians are available 7 days a week. Get same-day service!
          </p>
          <a href="tel:7710074028">
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Call Now: 7710074028
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
