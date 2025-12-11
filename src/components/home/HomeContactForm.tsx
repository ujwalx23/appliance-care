import { Phone, Send } from "lucide-react";
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

const HomeContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [machineType, setMachineType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [showOtherField, setShowOtherField] = useState(false);

  const handleServiceTypeChange = (value: string) => {
    setServiceType(value);
    setShowOtherField(value === "Other (Please mention)");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("machineType", machineType);
    formData.append("serviceType", serviceType);

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
        setServiceType("");
        setShowOtherField(false);
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
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Book a Service
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="home-name">Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="home-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="home-phone">Phone <span className="text-destructive">*</span></Label>
                  <Input
                    id="home-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="home-email">Email <span className="text-destructive">*</span></Label>
                <Input
                  id="home-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="home-locality">Locality <span className="text-destructive">*</span></Label>
                <Input
                  id="home-locality"
                  name="locality"
                  type="text"
                  placeholder="Your area/locality"
                  required
                  className="h-11"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Machine Type <span className="text-destructive">*</span></Label>
                  <Select value={machineType} onValueChange={setMachineType} required>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select type" />
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
                  <Label>Service Type <span className="text-destructive">*</span></Label>
                  <Select value={serviceType} onValueChange={handleServiceTypeChange} required>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Installation & Uninstallation">Installation & Uninstallation</SelectItem>
                      <SelectItem value="Removal">Removal</SelectItem>
                      <SelectItem value="Repair">Repair</SelectItem>
                      <SelectItem value="Service">Service</SelectItem>
                      <SelectItem value="Other (Please mention)">Other (Please mention)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {showOtherField && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="home-otherDescription">Please specify <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="home-otherDescription"
                    name="otherDescription"
                    placeholder="Please describe your service requirement..."
                    required
                    className="min-h-[80px] resize-none"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="home-issue">Issue Description <span className="text-destructive">*</span></Label>
                <Textarea
                  id="home-issue"
                  name="issue"
                  placeholder="Describe the issue..."
                  required
                  className="min-h-[80px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 h-12"
                disabled={isSubmitting || !machineType || !serviceType}
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
    </section>
  );
};

export default HomeContactForm;
