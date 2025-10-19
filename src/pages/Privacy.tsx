import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Privacy & Data Protection
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is our priority. Here's how we protect your information.
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8 prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Privacy Commitment</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  N.E.T. is designed with privacy as a core principle. We are committed to transparency, 
                  data minimization, and giving you full control over your information.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By default, we do <strong>not retain</strong> your assessment responses. Data is 
                  processed in real-time to generate your report and then discarded. If you choose to 
                  enable 30-day retention, your data will be encrypted and stored securely, and you can 
                  export or delete it at any time.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">How We Use Your Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To provide personalized pre-screen insights and reports</li>
                  <li>• To improve our AI models and assessment accuracy (anonymized data only)</li>
                  <li>• To ensure platform security and prevent abuse</li>
                  <li>• To send service updates (if you've opted in to communications)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">HIPAA Alignment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While N.E.T. is a non-diagnostic tool and does not fall under traditional "covered entity" 
                  definitions, we have built our platform with HIPAA-inspired safeguards including encryption 
                  at rest and in transit, access controls, and audit logging.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">COPPA Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not knowingly collect personal information from children under 13 without verifiable 
                  parental consent. If you are completing an assessment on behalf of a minor, you must 
                  confirm you have guardian authority.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">FERPA Considerations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For schools and educational institutions using N.E.T., we provide tools to maintain student 
                  privacy and comply with educational record requirements. Our institutional plans include data 
                  processing agreements and audit capabilities.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Accessibility (ADA/WCAG 2.1 AA)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  N.E.T. is designed to be accessible to all users. We support screen readers, keyboard 
                  navigation, high contrast modes, and dyslexia-friendly fonts. If you encounter accessibility 
                  barriers, please contact us.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Your Rights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access your data at any time</li>
                  <li>• Export your reports and assessment history</li>
                  <li>• Delete your account and all associated data</li>
                  <li>• Opt out of optional data retention</li>
                  <li>• Request corrections to inaccurate information</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Third-Party Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use trusted third-party services for hosting, payment processing, and analytics. These 
                  partners are contractually required to maintain the same privacy standards we uphold.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Updates to This Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy periodically. Significant changes will be communicated 
                  via email (if you've opted in) or through in-app notifications.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Contact Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about privacy or data protection? Email us at{" "}
                  <a href="mailto:privacy@net-prescreen.com" className="text-primary hover:underline">
                    privacy@net-prescreen.com
                  </a>
                </p>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
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

export default Privacy;