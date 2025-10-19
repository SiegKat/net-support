import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Clipboard, Download, Lightbulb, Share2 } from "lucide-react";

const roleSummaries: Record<string, { headline: string; notes: string[]; actions: string[] }> = {
  caregiver: {
    headline: "You described bright curiosity paired with reading focus dips.",
    notes: [
      "Short listening breaks keep energy steady—consider a calm-down basket.",
      "Chunking long homework into smaller steps reduces overwhelm.",
      "Visual reminders (picture schedules) help transitions stay smooth.",
    ],
    actions: [
      "Schedule a weekly check-in with the teacher to trade quick wins.",
      "Share the focus timer tool for independent work moments.",
      "Consider asking for a flexible seating option during literacy blocks.",
    ],
  },
  teacher: {
    headline: "Students thrive with multi-sensory input and predictable routines.",
    notes: [
      "Sitting near instruction improves attention, especially during new content.",
      "Providing both spoken and written directions prevents missed steps.",
      "Movement-friendly supports (chair band, stretch breaks) keep focus.",
    ],
    actions: [
      "Add a 3-step visual checklist to the student's desk for independent tasks.",
      "Offer alternative ways to show learning (audio reply, quick sketch).",
      "Coordinate with caregivers on consistent vocabulary for routines.",
    ],
  },
  clinician: {
    headline: "Client responds to rapport, predictable pacing, and previewing.",
    notes: [
      "Language processing slows when instructions stack quickly.",
      "Sensory cues include fidgeting and shoulder tension during transitions.",
      "Strengths include strong verbal reasoning and empathy with peers.",
    ],
    actions: [
      "Share a one-page intake summary with allied providers ahead of sessions.",
      "Screen for executive function supports (planners, timers).",
      "Provide grounding strategies before discussing challenging topics.",
    ],
  },
};

const accommodations = [
  "Flexible seating near instruction",
  "Chunk multi-step tasks into 3-part checklists",
  "Offer written + verbal directions",
  "Allow brief movement or sensory breaks",
  "Provide visual timers for transitions",
];

const Results = () => {
  const { state } = useLocation();
  const role = (state as { role?: string } | undefined)?.role ?? "caregiver";
  const [activeRole, setActiveRole] = useState<string>(role in roleSummaries ? role : "caregiver");
  const [selectedAccommodations, setSelectedAccommodations] = useState<string[]>([]);

  const handleExport = () => {
    toast.success("Preparing accessible PDF export…");
  };

  const toggleAccommodation = (item: string) => {
    setSelectedAccommodations((prev) =>
      prev.includes(item) ? prev.filter((value) => value !== item) : [...prev, item]
    );
  };

  const handleCopy = async () => {
    const text = selectedAccommodations.length ? selectedAccommodations.join("\n") : accommodations.join("\n");
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Accommodations copied to clipboard");
    } catch (error) {
      toast.error("Unable to copy. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-8">
          <header className="space-y-4 text-center text-balance">
            <div className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-4 py-2 text-sm font-medium text-success">
              Calm summary ready
            </div>
            <h1 className="text-4xl font-semibold text-[color:var(--color-ink)]">Here’s what we heard and how to use it.</h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This non-diagnostic overview translates your responses into strengths, needs, and next steps. Share it with your team or export a PDF any time.
            </p>
          </header>

          <section className="relative">
            <div className="sm:absolute sm:right-6 sm:top-6">
              <Button onClick={handleExport} variant="outline" aria-label="Export PDF" className="shadow-[var(--shadow-card)]">
                <Download className="mr-2 h-4 w-4" aria-hidden="true" /> Export PDF
              </Button>
            </div>
            <Card className="border-success/30 bg-success/10 pr-0 sm:pr-40">
              <CardHeader className="space-y-3">
                <CardTitle className="flex items-center gap-2 text-success">
                  <Lightbulb className="h-5 w-5" aria-hidden="true" /> Outcome snapshot (non-diagnostic)
                </CardTitle>
                <CardDescription className="text-base text-[color:var(--color-ink)]">
                  Your responses suggest strong verbal thinking paired with reading endurance challenges. Structured support and movement breaks keep confidence high.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Keep collaborating with trusted educators and health professionals to decide next evaluations or plans.</p>
                <p className="font-medium text-success">Data retention stays off by default. Export or delete anytime.</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex flex-col gap-6 rounded-[20px] border border-[color:var(--color-border)] bg-[color:var(--color-card)]/90 p-6 shadow-[var(--shadow-card)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1 text-left">
                  <h2 className="text-2xl font-semibold text-[color:var(--color-ink)]">Role-ready views</h2>
                  <p className="text-sm text-muted-foreground">Switch tabs to see tailored language for each audience.</p>
                </div>
                <Button onClick={handleExport} className="sm:hidden" variant="outline">
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" /> Export PDF
                </Button>
              </div>

              <Tabs value={activeRole} onValueChange={setActiveRole} className="space-y-6">
                <TabsList className="w-full justify-start overflow-x-auto">
                  <TabsTrigger value="caregiver">Caregiver</TabsTrigger>
                  <TabsTrigger value="teacher">Teacher</TabsTrigger>
                  <TabsTrigger value="clinician">Clinician</TabsTrigger>
                </TabsList>

                {Object.entries(roleSummaries).map(([key, content]) => (
                  <TabsContent key={key} value={key} className="space-y-6">
                    <Card className="border-[color:var(--color-border)]">
                      <CardHeader className="space-y-3">
                        <CardTitle className="text-lg text-[color:var(--color-ink)]">{content.headline}</CardTitle>
                        <CardDescription>
                          We translated the conversation into plain-language notes you can share right away.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3">
                          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">What stood out</h3>
                          <ul className="space-y-3">
                            {content.notes.map((note) => (
                              <li key={note} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Action ideas</h3>
                          <ul className="space-y-3">
                            {content.actions.map((action) => (
                              <li key={action} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Share2 className="mt-0.5 h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" /> {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,_1fr)_320px]">
            <Card className="border-[color:var(--color-border)]">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle>504-plan starter checklist</CardTitle>
                  <CardDescription>Select the supports that fit. Export or copy whenever you’re ready.</CardDescription>
                </div>
                <Badge variant="outline" className="rounded-full border-[var(--color-accent)]/40 text-[var(--color-accent)]">
                  Peer-validated
                </Badge>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {accommodations.map((item) => {
                    const isSelected = selectedAccommodations.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleAccommodation(item)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all focus-ring ${
                          isSelected
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)]"
                            : "border-[color:var(--color-border)] bg-[color:var(--color-card)] hover:border-[var(--color-primary)]/60"
                        }`}
                        aria-pressed={isSelected}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                <Separator className="bg-[color:var(--color-border)]" />
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleCopy} variant="secondary" size="sm" className="inline-flex items-center gap-2">
                    <Clipboard className="h-4 w-4" aria-hidden="true" /> Copy to clipboard
                  </Button>
                  <Button onClick={handleExport} variant="ghost" size="sm" className="inline-flex items-center gap-2">
                    <Download className="h-4 w-4" aria-hidden="true" /> Export selected
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[color:var(--color-border)] bg-[color:var(--color-bg)]/70">
              <CardHeader>
                <CardTitle>Share this summary</CardTitle>
                <CardDescription className="text-sm">
                  Give teammates a calm overview with context, strengths, and next steps.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Download the PDF to email or print. You can also copy accommodations above and paste into meeting notes or IEP drafts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">No PII stored</Badge>
                  <Badge variant="outline">WCAG 2.2 AA</Badge>
                  <Badge variant="outline">HIPAA-aligned mindset</Badge>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
