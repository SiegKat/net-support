import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Try N.E.T. with basic features",
    features: [
      "3 pre-screen sessions per month",
      "Basic report summaries",
      "No data retention (ephemeral only)",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Individual",
    price: "$19.99",
    period: "/month",
    description: "Perfect for parents and adult learners",
    features: [
      "Unlimited pre-screen sessions",
      "Full report exports (PDF/Doc)",
      "Optional 30-day data retention",
      "Access to assistive tools (focus timer, reading assistant)",
      "Priority email support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Family/Educator",
    price: "$99",
    period: "/month",
    description: "For families or teachers managing multiple learners",
    features: [
      "Everything in Individual",
      "Up to 5 learner profiles",
      "Full interventions library access",
      "Classroom strategy guides",
      "Peer-validated ratings",
      "Priority support with faster response",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For schools, districts, and clinics",
    features: [
      "Private tenant deployment",
      "SSO (SAML/OIDC)",
      "Business Associate Agreement (BAA/DPA)",
      "Audit logs & compliance reporting",
      "Org dashboard with anonymized analytics",
      "99.9% SLA",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Choose Your Plan
            </h1>
            <p className="text-lg text-muted-foreground">
              Start with our free tier or unlock advanced features and unlimited access
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.highlighted
                    ? "border-primary shadow-strong scale-105"
                    : "border-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="space-y-4 pb-6">
                  <div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="mt-2">{tier.description}</CardDescription>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground">{tier.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link to={tier.name === "Enterprise" ? "/contact" : "/onboarding"}>
                      {tier.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                  All Plans Include
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>HIPAA-aligned privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>WCAG 2.1 AA accessibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Mobile-optimized interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Regular updates & improvements</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;