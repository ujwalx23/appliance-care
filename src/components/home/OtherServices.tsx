import { Link } from "react-router-dom";
import { Thermometer, Wind, Zap, Shirt, ArrowRight } from "lucide-react";

const otherServices = [
  {
    icon: Thermometer,
    title: "Refrigerator Repair",
    description: "Not cooling properly? Ice buildup? We fix all fridge issues.",
  },
  {
    icon: Wind,
    title: "AC Service & Repair",
    description: "AC not cooling? Get expert AC repair and maintenance service.",
  },
  {
    icon: Zap,
    title: "Microwave Repair",
    description: "Microwave not heating? Turntable not rotating? We can help.",
  },
  {
    icon: Shirt,
    title: "Dryer Repair",
    description: "Clothes not drying? Get your dryer fixed by our experts.",
  },
];

const OtherServices = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Other Appliance Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We also repair and service other home appliances
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {otherServices.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group bg-background rounded-xl border border-border p-6 hover:shadow-md hover:border-primary/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
