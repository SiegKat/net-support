import { Button } from "@/components/ui/button";
import { GraduationCap, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const proofPoints = [
  {
    label: "15-minute, non-diagnostic pre-screen",
    icon: GraduationCap,
  },
  {
    label: "Plain-language insights you can share",
    icon: HeartHandshake,
  },
];

const trustChips = ["HIPAA-aligned mindset", "WCAG 2.2 AA", "Not medical advice"];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--gradient-hero)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_420px)] items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm">
              Calm v2 is here
            </div>

            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
                Quick, caring pre-screening—no diagnosis, just clarity.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                N.E.T. guides parents, educators, adults, and clinicians through a supportive conversation that
                surfaces patterns, accommodations, and next steps—all with privacy control in your hands.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {proofPoints.map((point) => (
                <span
                  key={point.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/90 px-4 py-2 shadow-sm"
                >
                  <point.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {point.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="text-base shadow-[var(--shadow-card)]">
                <Link to="/onboarding">Start Pre-Screen</Link>
              </Button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                For Schools &amp; Clinics
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/80 px-3 py-2 text-[0.7rem] text-muted-foreground shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[24px] bg-gradient-to-br from-white via-primary/5 to-accent/10 blur-3xl" />
            <div className="rounded-[24px] border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">What to expect</p>
                  <p className="text-lg text-foreground">
                    Answer a few thoughtful prompts, see your estimated time to finish, and receive role-ready summaries you can
                    trust.
                  </p>
                </div>
                <div className="grid gap-4 text-sm">
                  <div className="rounded-xl border border-border/80 bg-muted/50 p-4">
                    <p className="font-medium text-foreground">Stay in control</p>
                    <p className="text-muted-foreground">
                      Data retention is off by default. Opt in for 30 days only if you choose.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-muted/50 p-4">
                    <p className="font-medium text-foreground">Built for ease</p>
                    <p className="text-muted-foreground">
                      Reading assist, high-contrast mode, and clear, grade-6 friendly language throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-dashed border-primary/40" aria-hidden="true" />
            <div className="absolute -top-10 -right-12 h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/40" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
