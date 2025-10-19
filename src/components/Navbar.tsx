import { ThemeChoice, useDesignSystem } from "@/components/DesignSystemProvider";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, fontMode, toggleFontMode } = useDesignSystem();

  const navLinks = [
    { label: "How It Works", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Privacy", href: "/privacy" },
  ];

  const themeOptions: { value: ThemeChoice; label: string }[] = [
    { value: "calm", label: "Calm teal" },
    { value: "plum", label: "Soft plum" },
    { value: "midnight", label: "Midnight sand" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-foreground focus-visible:outline-none">
          <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-primary to-accent text-lg font-semibold text-white shadow-[var(--shadow-card)]">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold leading-tight">N.E.T.</span>
            <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Neurodiverse pre-screen</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="sr-only" id="theme-select-label">
                Select theme
              </span>
              <Select value={theme} onValueChange={(value) => setTheme(value as ThemeChoice)}>
                <SelectTrigger aria-labelledby="theme-select-label" className="min-w-[11rem]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent align="end">
                  {themeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="capitalize">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button
              type="button"
              onClick={toggleFontMode}
              className="inline-flex h-11 items-center justify-center rounded-[12px] border border-border/70 bg-card px-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-pressed={fontMode === "dyslexia"}
            >
              {fontMode === "dyslexia" ? "Atkinson font" : "Inter font"}
            </button>
            <Button asChild size="lg">
              <Link to="/onboarding">Start Pre-Screen</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/70 bg-background/95 px-6 py-6 shadow-sm md:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block rounded-[12px] px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="mobile-theme">
                Theme
              </label>
              <Select
                value={theme}
                onValueChange={(value) => {
                  setTheme(value as ThemeChoice);
                  setIsOpen(false);
                }}
              >
                <SelectTrigger id="mobile-theme">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {themeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="capitalize">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button
              type="button"
              onClick={() => {
                toggleFontMode();
                setIsOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-[12px] border border-border/70 bg-card px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              aria-pressed={fontMode === "dyslexia"}
            >
              Dyslexia-friendly font
              <span className="text-xs uppercase tracking-wide text-primary">
                {fontMode === "dyslexia" ? "On" : "Off"}
              </span>
            </button>
            <Button asChild className="w-full" size="lg">
              <Link to="/onboarding" onClick={() => setIsOpen(false)}>
                Start Pre-Screen
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;