import { useEffect, useState } from "react";

export type ThemeName = "calm" | "midnight";

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

const readStoredTheme = (): ThemeName => {
  if (!isBrowser) {
    return "calm";
  }

  const stored = window.localStorage.getItem("net-theme");
  if (stored === "midnight") {
    return stored;
  }

  return "calm";
};

const readStoredDyslexia = (): boolean => {
  if (!isBrowser) {
    return false;
  }

  return window.localStorage.getItem("net-dyslexia") === "on";
};

export const useThemePreference = () => {
  const [theme, setTheme] = useState<ThemeName>(() => readStoredTheme());

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("net-theme", theme);
  }, [theme]);

  return { theme, setTheme } as const;
};

export const useDyslexiaPreference = () => {
  const [enabled, setEnabled] = useState(() => readStoredDyslexia());

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    if (enabled) {
      document.documentElement.dataset.dyslexia = "true";
      window.localStorage.setItem("net-dyslexia", "on");
    } else {
      document.documentElement.removeAttribute("data-dyslexia");
      window.localStorage.removeItem("net-dyslexia");
    }
  }, [enabled]);

  return { dyslexiaEnabled: enabled, setDyslexiaEnabled: setEnabled } as const;
};
