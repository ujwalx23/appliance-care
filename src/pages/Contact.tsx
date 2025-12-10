import Layout from "@/components/layout/Layout";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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

            {/* Google Form Embed */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Book a Service</h2>
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdDEBWpzYbqLGHj8pW8bxmxK6JWEC7Y7c-3ej5j8A9qQvR8tw/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Service Request Form"
                >
                  Loading form...
                </iframe>
              </div>
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
