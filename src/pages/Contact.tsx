import Layout from "@/components/layout/Layout";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [machineType, setMachineType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("machineType", machineType);

    try {
      const response = await fetch("https://formspree.io/f/mrbnykwv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
        setMachineType("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to get your washing machine fixed? Reach out to us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need to book a service? We're here to help you 7 days a week.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Number</h3>
                    <a href="tel:7710074028" className="text-primary font-medium text-lg hover:underline">
                      7710074028
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:myblue@gmail.com" className="text-primary font-medium hover:underline">
                      myblue@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-foreground font-medium">8:00 AM - 10:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday to Sunday • Same-day service
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="tel:7710074028">
                  <Button variant="default" size="lg" className="w-full gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now - 7710074028
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="bg-background rounded-xl border border-border p-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="locality">Locality of Service <span className="text-destructive">*</span></Label>
                  <Input
                    id="locality"
                    name="locality"
                    type="text"
                    placeholder="Your area/locality"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="machineType">Machine Type <span className="text-destructive">*</span></Label>
                  <Select value={machineType} onValueChange={setMachineType} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select machine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Top Load">Top Load</SelectItem>
                      <SelectItem value="Front Load">Front Load</SelectItem>
                      <SelectItem value="Semi Automatic">Semi Automatic</SelectItem>
                      <SelectItem value="Fully Automatic">Fully Automatic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issue">Issue Description <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    placeholder="Describe the issue with your washing machine..."
                    required
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 h-12"
                  disabled={isSubmitting || !machineType}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Need Urgent Repair?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Don't wait! Call us now for same-day washing machine repair service.
          </p>
          <a href="tel:7710074028">
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              7710074028
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
