import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type ThemeChoice = "calm" | "plum" | "midnight";
type FontMode = "default" | "dyslexia";

interface DesignSystemContextValue {
  theme: ThemeChoice;
  setTheme: (theme: ThemeChoice) => void;
  fontMode: FontMode;
  toggleFontMode: () => void;
}

const STORAGE_KEYS = {
  theme: "net-theme",
  font: "net-font-mode",
} as const;

const DesignSystemContext = createContext<DesignSystemContextValue | undefined>(undefined);

interface DesignSystemProviderProps {
  children: ReactNode;
}

const getStoredTheme = (): ThemeChoice => {
  if (typeof window === "undefined") {
    return "calm";
  }

  const stored = window.localStorage.getItem(STORAGE_KEYS.theme) as ThemeChoice | null;
  return stored === "plum" || stored === "midnight" ? stored : "calm";
};

const getStoredFont = (): FontMode => {
  if (typeof window === "undefined") {
    return "default";
  }

  const stored = window.localStorage.getItem(STORAGE_KEYS.font) as FontMode | null;
  return stored === "dyslexia" ? stored : "default";
};

export const DesignSystemProvider = ({ children }: DesignSystemProviderProps) => {
  const [theme, setTheme] = useState<ThemeChoice>(() => getStoredTheme());
  const [fontMode, setFontMode] = useState<FontMode>(() => getStoredFont());

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.font = fontMode;
    window.localStorage.setItem(STORAGE_KEYS.font, fontMode);
  }, [fontMode]);

  const value = useMemo<DesignSystemContextValue>(
    () => ({
      theme,
      setTheme,
      fontMode,
      toggleFontMode: () => setFontMode((previous) => (previous === "default" ? "dyslexia" : "default")),
    }),
    [theme, fontMode],
  );

  return <DesignSystemContext.Provider value={value}>{children}</DesignSystemContext.Provider>;
};

export const useDesignSystem = () => {
  const context = useContext(DesignSystemContext);
  if (!context) {
    throw new Error("useDesignSystem must be used within a DesignSystemProvider");
  }
  return context;
};

