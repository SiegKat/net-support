import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, GraduationCap, User, Stethoscope, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const roles = [
  {
    id: "parent",
    icon: Users,
    title: "Parent/Caregiver",
    description: "I'm seeking guidance for my child or someone I care for",
  },
  {
    id: "teacher",
    icon: GraduationCap,
    title: "Teacher/School",
    description: "I need classroom strategies and documentation support",
  },
  {
    id: "adult",
    icon: User,
    title: "Adult Self",
    description: "I want to understand my own learning profile",
  },
  {
    id: "clinician",
    icon: Stethoscope,
    title: "Clinician",
    description: "I'm conducting a professional pre-screen or intake",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [consents, setConsents] = useState({
    privacy: false,
    nonDiagnostic: false,
    ageGate: false,
  });

  const handleContinue = () => {
    if (!selectedRole) {
      toast.error("Please select your role to continue");
      return;
    }
    if (!consents.privacy || !consents.nonDiagnostic || !consents.ageGate) {
      toast.error("Please accept all required consents to continue");
      return;
    }
    
    toast.success("Starting your pre-screen assessment");
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Let's Get Started
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose your role and review our consent information to begin your pre-screen
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Select Your Role</CardTitle>
                <CardDescription>
                  This helps us tailor the assessment and report to your needs
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-medium ${
                      selectedRole === role.id
                        ? "border-primary bg-primary/5 shadow-medium"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <role.icon
                      className={`h-8 w-8 mb-3 ${
                        selectedRole === role.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consent & Privacy</CardTitle>
                <CardDescription>
                  Please review and accept the following to continue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={consents.privacy}
                    onCheckedChange={(checked) =>
                      setConsents({ ...consents, privacy: checked as boolean })
                    }
                  />
                  <label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    I understand that N.E.T. does not retain my data by default. If I choose to save my
                    results, I can opt in to 30-day retention. I can export or delete my data at any time.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="nonDiagnostic"
                    checked={consents.nonDiagnostic}
                    onCheckedChange={(checked) =>
                      setConsents({ ...consents, nonDiagnostic: checked as boolean })
                    }
                  />
                  <label htmlFor="nonDiagnostic" className="text-sm leading-relaxed cursor-pointer">
                    I understand this is a <strong>non-diagnostic pre-screening tool</strong>. It does not
                    replace professional evaluation, diagnosis, or medical advice.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="ageGate"
                    checked={consents.ageGate}
                    onCheckedChange={(checked) =>
                      setConsents({ ...consents, ageGate: checked as boolean })
                    }
                  />
                  <label htmlFor="ageGate" className="text-sm leading-relaxed cursor-pointer">
                    I confirm I am 18 years or older, or have guardian consent if completing this for a minor.
                  </label>
                </div>

                <div className="pt-4 bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Privacy commitment:</strong> We are HIPAA-aligned,
                    COPPA compliant, and WCAG 2.1 AA accessible. Your responses are encrypted and processed
                    securely. Learn more in our{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button size="lg" onClick={handleContinue} className="min-w-[200px]">
                Continue to Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Onboarding;