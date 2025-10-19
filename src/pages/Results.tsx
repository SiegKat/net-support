import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Lightbulb, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Results = () => {
  const handleDownload = (type: string) => {
    toast.success(`Downloading ${type}...`);
  };

  const insights = [
    "Strong verbal reasoning abilities observed",
    "May benefit from visual learning supports",
    "Extended time accommodations recommended",
    "Structured routines and clear expectations helpful",
  ];

  const accommodations = [
    "Preferential seating near instruction",
    "Use of graphic organizers and visual aids",
    "Extended time for assignments and tests (1.5x)",
    "Access to fidget tools or movement breaks",
    "Written and verbal instructions provided together",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Your Pre-Screen Results
            </h1>
            <p className="text-lg text-muted-foreground">
              Below is a non-diagnostic summary with suggested supports and next steps
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-warning/20 bg-warning/5">
              <CardContent className="p-6">
                <p className="text-sm leading-relaxed">
                  <strong className="text-warning">Important:</strong> This is a{" "}
                  <strong>non-diagnostic pre-screen</strong>. It does not replace a comprehensive
                  evaluation by qualified professionals. Use these insights as a starting point for
                  conversations with educators, healthcare providers, or specialists.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Key Observations
                </CardTitle>
                <CardDescription>
                  Based on your responses, here are some patterns we observed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {insights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-card-foreground">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Suggested Accommodations
                </CardTitle>
                <CardDescription>
                  Potential supports for classroom and home environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {accommodations.map((accommodation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{accommodation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Your Results</CardTitle>
                <CardDescription>
                  Download documentation to share with educators or healthcare providers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleDownload("504 Plan Starter")}
                  variant="outline"
                  className="w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    504 Plan Starter Document
                  </span>
                  <Download className="h-4 w-4" />
                </Button>
                
                <Button
                  onClick={() => handleDownload("Caregiver Summary")}
                  variant="outline"
                  className="w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Caregiver Summary (Plain Language)
                  </span>
                  <Download className="h-4 w-4" />
                </Button>
                
                <Button
                  onClick={() => handleDownload("Teacher Notes")}
                  variant="outline"
                  className="w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Teacher Notes (PII-Stripped)
                  </span>
                  <Download className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed">
                  1. <strong>Share with your team:</strong> Bring these results to teachers, counselors,
                  or healthcare providers for professional guidance.
                </p>
                <p className="text-sm leading-relaxed">
                  2. <strong>Explore interventions:</strong> Browse our evidence-based strategies library
                  for additional home and classroom supports.
                </p>
                <p className="text-sm leading-relaxed">
                  3. <strong>Consider evaluation:</strong> If patterns persist, consult with a
                  psychologist, learning specialist, or medical professional for comprehensive assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;