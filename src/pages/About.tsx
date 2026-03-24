import Layout from "@/components/layout/Layout";
import { Phone, Users, Calendar, CheckCircle2, Wrench, Target, Eye, Heart, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "5", label: "Years in Business", icon: Calendar },
  { value: "2400", label: "Happy Clients", icon: Users },
  { value: "5400", label: "Jobs Completed", icon: CheckCircle2 },
  { value: "5+", label: "Skilled Technicians", icon: Wrench },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Our mission is to provide reliable and efficient washing machine repair and maintenance services, ensuring your appliances operate at their best for years to come.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Our vision is to provide exceptional washing machine repair and service, ensuring your appliance operates at peak efficiency and reliability.",
  },
  {
    icon: Heart,
    title: "Our Core Values",
    description: "Our commitment to quality, efficiency, and customer satisfaction drives our washing machine repair and service. We strive for excellence in every task, ensuring your appliance functions at its best.",
  },
  {
    icon: Flag,
    title: "Our Goal",
    description: "Our goal is to provide reliable and efficient washing machine repair and maintenance services, ensuring your appliance operates at its best.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Our skilled technicians are dedicated to providing top-notch washing machine repair and maintenance services, ensuring your appliance runs smoothly.",
  },
  {
    icon: CheckCircle2,
    title: "Our Commitment",
    description: "Our skilled technicians are dedicated to providing reliable and efficient washing machine repair and maintenance services.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Are?
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              At SIEMENS, we are dedicated to providing top-notch repair and service for all kinds of washing machines. Our team of skilled technicians is available round the clock to address any issues you may have with your washing machine.
            </p>
            <p className="text-muted-foreground">
              We understand how essential a functioning washing machine is for your daily routine, which is why we strive to offer fast and reliable services to get your appliance back up and running smoothly. Whether it's a minor repair or a major issue, our experts have the knowledge and expertise to handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Our services include but are not limited to fixing leaks, replacing damaged parts, addressing drainage problems, resolving electrical issues, and ensuring optimal performance of your washing machine. We use quality spare parts and advanced tools to ensure long-lasting results.
            </p>
            <p className="text-muted-foreground">
              Customer satisfaction is our top priority, and we go above and beyond to provide exceptional service that exceeds expectations. With our availability, you can rely on us anytime you encounter an issue with your washing machine. Don't let a malfunctioning appliance disrupt your daily life – contact SIEMENS for prompt and efficient repair solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10">
            Experience & Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Would you like to take service with us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fast and reliable washing machine repair service. Expert technicians to fix all issues. Book now!
          </p>
          <a href="tel:7977339435">
            <Button variant="default" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Book Now - 7977339435
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
