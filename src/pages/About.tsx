import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertCircle, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About N.E.T.
            </h1>
            <p className="text-lg text-muted-foreground">
              Neurodiverse Educational Testing—a pre-screening platform built on research, 
              empathy, and accessibility
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold text-card-foreground">What N.E.T. Is</h2>
                <p className="text-muted-foreground leading-relaxed">
                  N.E.T. is a 15-minute, conversational pre-screening tool designed to help parents, 
                  educators, adults, and clinicians quickly identify patterns that may suggest learning 
                  differences. Our AI-guided assessment provides non-diagnostic insights, suggested 
                  accommodations, and exportable documentation—including 504-plan starters.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're built on evidence-based frameworks and designed with bias awareness, including 
                  considerations for female-presenting ADHD, ESL/bilingual contexts, and masking behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-warning/20 bg-warning/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-card-foreground">What N.E.T. Is Not</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-warning mt-0.5">•</span>
                        <span>
                          <strong>Not a diagnosis:</strong> N.E.T. does not diagnose medical or 
                          psychological conditions.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-warning mt-0.5">•</span>
                        <span>
                          <strong>Not medical advice:</strong> Results should not replace consultation 
                          with qualified healthcare or educational professionals.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-warning mt-0.5">•</span>
                        <span>
                          <strong>Not a substitute for comprehensive evaluation:</strong> Use our 
                          insights as a starting point for professional assessment.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">Our Commitment to Safety</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Privacy by default:</strong> We do not retain 
                      your data unless you explicitly opt in.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">HIPAA-aligned:</strong> Our platform is built 
                      with healthcare privacy standards in mind.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">COPPA & FERPA compliant:</strong> We take child 
                      privacy and educational records seriously.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Crisis routing:</strong> If risk flags are 
                      detected, we immediately route to localized crisis resources.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Accessibility:</strong> WCAG 2.1 AA compliant 
                      with dyslexia-friendly fonts, high contrast, and TTS support.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">Our Values</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe every learner deserves understanding, support, and access to tools that 
                  honor their unique strengths. N.E.T. is designed to be inclusive, affirming, and 
                  empowering—helping families and educators take informed next steps with confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team is committed to continuous improvement, bias awareness, and transparency. 
                  We actively seek feedback from diverse communities to ensure N.E.T. serves all 
                  learners equitably.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold text-card-foreground">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      How long does the pre-screen take?
                    </h3>
                    <p className="text-muted-foreground">
                      Approximately 15 minutes. You can save and resume your session if you've opted in 
                      to data retention.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Is my data stored?
                    </h3>
                    <p className="text-muted-foreground">
                      By default, no. We process your responses in real-time and do not retain data 
                      unless you explicitly choose 30-day retention during onboarding.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Can I use this for my child?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, with guardian consent. You'll be asked to confirm you have permission to 
                      complete the assessment on behalf of a minor.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      What happens if I need crisis support?
                    </h3>
                    <p className="text-muted-foreground">
                      If our system detects risk indicators, you'll be immediately directed to localized 
                      crisis resources. The session will pause safely, and no further assessment will occur.
                    </p>
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

export default About;