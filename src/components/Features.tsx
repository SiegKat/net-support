import { Users, GraduationCap, Stethoscope, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    icon: Users,
    title: "Parents & Caregivers",
    description: "Get early guidance and home strategies in plain language, with no medical jargon.",
  },
  {
    icon: GraduationCap,
    title: "Teachers & Schools",
    description: "Access classroom accommodations, documentation tools, and 504-plan starters instantly.",
  },
  {
    icon: User,
    title: "Adults Self-Screening",
    description: "Explore your learning profile confidentially and discover supportive resources.",
  },
  {
    icon: Stethoscope,
    title: "Clinicians",
    description: "Streamline intake with structured pre-screen data and observation summaries.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Built for Everyone in the Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a parent, educator, adult learner, or clinician—N.E.T. provides 
            role-specific insights and actionable next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <role.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">{role.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;