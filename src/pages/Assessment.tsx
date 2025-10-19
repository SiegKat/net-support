import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [responses, setResponses] = useState<string[]>(Array(5).fill(""));
  const totalSteps = 5;

  const questions = [
    "Tell us about the learning challenges you've observed. What specific situations or tasks seem most difficult?",
    "How do these challenges affect daily activities, schoolwork, or social interactions?",
    "Have you noticed any particular strengths or strategies that work well?",
    "What accommodations or supports have been tried so far, if any?",
    "What are your main goals or concerns you'd like help addressing?",
  ];

  const handleNext = () => {
    if (!responses[currentStep - 1].trim()) {
      toast.error("Please provide a response before continuing");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success("Assessment complete! Generating your report...");
      setTimeout(() => navigate("/results"), 1500);
    }
  };

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses];
    newResponses[currentStep - 1] = value;
    setResponses(newResponses);
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-foreground">Pre-Screen Assessment</h1>
              <span className="text-sm text-muted-foreground">
                Question {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              ~{Math.max(1, totalSteps - currentStep + 1) * 3} minutes remaining
            </p>
          </div>

          <Card className="shadow-medium">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-card-foreground">
                    {questions[currentStep - 1]}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Take your time. Your detailed responses help us provide more accurate insights.
                  </p>
                </div>
              </div>

              <Textarea
                value={responses[currentStep - 1]}
                onChange={(e) => handleResponseChange(e.target.value)}
                placeholder="Share your observations here..."
                className="min-h-[200px] resize-none text-base"
              />

              <div className="mt-6 flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                <Button onClick={handleNext} size="lg">
                  {currentStep === totalSteps ? "Complete Assessment" : "Next Question"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Your responses are encrypted and processed securely. No data is retained by default.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Need help?</strong> If you're experiencing a crisis or
              need immediate support, please contact a crisis helpline. This tool is for informational
              purposes only and is not a substitute for professional care.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assessment;