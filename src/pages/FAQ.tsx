import Layout from "@/components/layout/Layout";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We provide washing machine repair services across major cities. Call us at 7710074028 to check if we serve your area.",
  },
  {
    question: "How quickly can you come for repair?",
    answer: "We offer same-day service in most areas. Our average response time is 30 minutes. For urgent repairs, call us directly at 7710074028.",
  },
  {
    question: "What brands do you repair?",
    answer: "We repair all major brands including Samsung, LG, Whirlpool, IFB, Bosch, Godrej, Haier, and many more. Both Indian and imported brands.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, we provide a 90-day warranty on our repair service and 90-day warranty on spare parts used.",
  },
  {
    question: "What is your inspection charge?",
    answer: "Our inspection charge starts at just ₹199. This covers diagnosis of the problem and recommendation for repair. No hidden costs!",
  },
  {
    question: "Do I need to pay in advance?",
    answer: "No, we don't take any advance payment. You pay only after the service is complete and you're satisfied with the repair.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI payments (Google Pay, PhonePe, Paytm), and bank transfers. Choose whatever is convenient for you.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes, we use 100% genuine spare parts for all repairs. This ensures your appliance works properly and lasts longer.",
  },
  {
    question: "What if the problem returns after repair?",
    answer: "All our repairs come with a 90-day warranty. If the same issue returns within the warranty period, we'll fix it free of charge.",
  },
  {
    question: "Do you repair front load and top load washing machines?",
    answer: "Yes, we repair all types of washing machines including front load, top load, semi-automatic, and fully automatic machines.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our washing machine repair services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Privacy Policy
            </h2>
            
            <div className="bg-background border border-border rounded-xl p-6 md:p-8 space-y-6">
              <p className="text-muted-foreground">
                At SIEMENS, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we protect it.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Information We Collect</h3>
                <p className="text-muted-foreground">
                  We collect personal information when you contact us by phone or email to schedule a washing machine repair and service or when you submit a request for more information through our website contact form. The personal information we collect may include your name, phone number, email address, and address.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How We Use Your Information</h3>
                <p className="text-muted-foreground">
                  We use your personal information to provide washing machine repair and service, respond to your inquiries, and communicate with you about our services. We may also use your information for marketing purposes, such as sending you promotional emails about our services. You can opt out of these emails at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How We Protect Your Information</h3>
                <p className="text-muted-foreground">
                  We take the security of your personal information seriously and have implemented industry-standard security measures to protect it. We use SSL encryption to secure data transmissions, and we regularly update our security systems to ensure they are up-to-date and effective.
                </p>
                <p className="text-muted-foreground mt-2">
                  We will never sell or share your personal information with third parties without your consent, except as required by law or as necessary to provide our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
                <p className="text-muted-foreground">
                  We use cookies on our website to enhance your browsing experience and to track website usage. Cookies are small text files that are stored on your device when you visit a website. You can disable cookies in your browser settings if you prefer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Changes to Privacy Policy</h3>
                <p className="text-muted-foreground">
                  We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of our services following the posting of changes constitutes your acceptance of those changes.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Disclaimer</h3>
                <p className="text-muted-foreground">
                  We are third Party Service Provider & We are independent customer service providers, & have no association or affiliation with third party brands. We are not using any brands name we are only service provider. Third party trademarks, logos, brand names, products, & services are used only for references for informative aim only.
                </p>
              </div>

              <p className="text-muted-foreground pt-4">
                If you have any questions about our Privacy Policy or the use of your personal information, please contact us by phone, email, or through our website contact form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Call us and we'll be happy to help you!
          </p>
          <a href="tel:7710074028">
            <Button variant="default" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Call 7710074028
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
