import { Shield, Lock, Eye, FileText } from "lucide-react";

const signals = [
  {
    icon: Shield,
    title: "HIPAA-Aligned",
    description: "Built with healthcare privacy standards in mind",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Default no-retention policy; you control your data",
  },
  {
    icon: Eye,
    title: "Accessibility First",
    description: "WCAG 2.1 AA compliant with assistive features",
  },
  {
    icon: FileText,
    title: "Non-Diagnostic",
    description: "Clear guidance, not medical advice or diagnosis",
  },
];

const TrustSignals = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <signal.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{signal.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;