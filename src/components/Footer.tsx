import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                N
              </div>
              <span className="font-bold text-xl">N.E.T.</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Neurodiverse Educational Testing—empowering understanding through accessible pre-screening.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/onboarding" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Start Pre-Screen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@net-prescreen.com" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          <p>© {currentYear} N.E.T. All rights reserved. This tool provides non-diagnostic insights only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;