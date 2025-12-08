import { useState } from "react";
import { Phone, Droplets, Thermometer, Wind, Zap, Shirt, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const appliances = [
  {
    id: "washing",
    icon: Droplets,
    name: "Washing Machine",
    tips: [
      "Check if the door is properly latched",
      "Ensure water supply valves are open",
      "Clean the filter every 2-3 months",
      "Don't overload beyond capacity",
    ],
  },
  {
    id: "fridge",
    icon: Thermometer,
    name: "Refrigerator",
    tips: [
      "Set thermostat to 3-5°C for fridge",
      "Check door seals for gaps",
      "Clean condenser coils annually",
      "Keep away from direct sunlight",
    ],
  },
  {
    id: "ac",
    icon: Wind,
    name: "Air Conditioner",
    tips: [
      "Clean or replace filters monthly",
      "Clear debris around outdoor unit",
      "Set to 24-26°C for efficiency",
      "Schedule annual maintenance",
    ],
  },
  {
    id: "microwave",
    icon: Zap,
    name: "Microwave",
    tips: [
      "Check door latch mechanism",
      "Clean interior after each use",
      "Never use metal containers",
      "Inspect power cord regularly",
    ],
  },
  {
    id: "dryer",
    icon: Shirt,
    name: "Dryer",
    tips: [
      "Clean lint trap before every load",
      "Check exhaust vent for blockages",
      "Don't overload the drum",
      "Ensure proper ventilation",
    ],
  },
];

const ApplianceWidget = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedAppliance = appliances.find((a) => a.id === selected);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Quick Help</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Troubleshoot Your <span className="gradient-text">Appliance</span>
            </h2>
            <p className="text-muted-foreground">
              Select your appliance for quick tips. Still stuck? We're a call away.
            </p>
          </div>

          {/* Appliance selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {appliances.map((appliance) => (
              <button
                key={appliance.id}
                onClick={() => setSelected(appliance.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                  selected === appliance.id
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30"
                    : "glass text-foreground hover:bg-muted/50"
                }`}
              >
                <appliance.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{appliance.name}</span>
              </button>
            ))}
          </div>

          {/* Tips display */}
          {selectedAppliance ? (
            <div className="glass-card rounded-3xl p-8 animate-scale-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <selectedAppliance.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {selectedAppliance.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Try these before calling</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {selectedAppliance.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm flex-1">
                  Issue persists? Our technicians are ready to help.
                </p>
                <a href="tel:+919876543210">
                  <Button variant="hero" size="lg">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-12 text-center">
              <p className="text-muted-foreground">👆 Select an appliance above to see quick tips</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplianceWidget;
