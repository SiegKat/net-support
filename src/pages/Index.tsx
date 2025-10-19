import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustSignals from "@/components/TrustSignals";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="flex flex-col gap-12 sm:gap-16">
        <Hero />
        <TrustSignals />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default Index;