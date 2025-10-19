import { Button } from "@/components/ui/button";
import { Shield, Clock, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary-light rounded-full text-sm font-medium text-primary">
              Non-diagnostic pre-screening tool
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Understanding Starts with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clarity
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              A 15-minute, research-backed pre-screen for learning differences. 
              Get personalized insights, classroom strategies, and documentation support—all in one place.
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>HIPAA-aligned</span>
              <span>•</span>
              <span>COPPA Compliant</span>
              <span>•</span>
              <span>WCAG 2.1 AA</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/onboarding">Start Pre-Screen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">~15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Instant 504 starter</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Diverse learners in an inclusive educational environment"
              className="relative rounded-3xl shadow-strong w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;