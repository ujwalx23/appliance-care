import { Link } from "react-router-dom";
import { ArrowUpRight, Droplets, Thermometer, Wind, Zap, Shirt } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Washing Machine",
    description: "Not spinning, leaking, or making noise? We'll diagnose and fix it fast.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Thermometer,
    title: "Refrigerator",
    description: "Keep your food fresh with our comprehensive cooling system repairs.",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    icon: Wind,
    title: "Air Conditioner",
    description: "Beat the heat. AC not cooling? We handle all brands and models.",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    icon: Zap,
    title: "Microwave",
    description: "From no heat to display issues, we fix all microwave problems.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: Shirt,
    title: "Dryer",
    description: "Clothes not drying? Our experts restore optimal performance.",
    gradient: "from-rose-500 to-pink-400",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What We <span className="gradient-text">Repair</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From diagnosis to repair, we handle all major home appliances with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group relative glass-card rounded-2xl p-6 hover:bg-muted/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Arrow */}
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Hover glow */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
            </Link>
          ))}

          {/* CTA Card */}
          <Link
            to="/contact"
            className="group relative glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center border-2 border-dashed border-border hover:border-primary/50 transition-all duration-500 animate-fade-in"
            style={{ animationDelay: `${services.length * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Other Appliance?</h3>
            <p className="text-muted-foreground text-sm mb-4">We repair many more. Just ask!</p>
            <span className="text-primary text-sm font-medium group-hover:underline">Contact Us →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
