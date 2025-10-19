import { MessageSquare, Brain, FileText, Download } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Answer Questions",
    description: "Conversational 15-minute pre-screen adapted to your role and context",
  },
  {
    icon: Brain,
    step: "2",
    title: "AI Analysis",
    description: "Bias-aware, research-backed insights with built-in safety guardrails",
  },
  {
    icon: FileText,
    step: "3",
    title: "Get Your Report",
    description: "Role-specific summaries with suggested classroom/home strategies",
  },
  {
    icon: Download,
    step: "4",
    title: "Export & Share",
    description: "Download 504-plan starters, teacher notes, or intake documents",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How N.E.T. Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, secure process designed to give you actionable insights in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for larger screens */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-soft">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;