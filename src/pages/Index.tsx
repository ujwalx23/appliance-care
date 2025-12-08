import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import TrustSection from "@/components/home/TrustSection";
import ApplianceWidget from "@/components/home/ApplianceWidget";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServiceCards />
      <TrustSection />
      <ApplianceWidget />
      <CTASection />
    </Layout>
  );
};

export default Index;
