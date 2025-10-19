import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustSignals from "@/components/TrustSignals";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustSignals />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;