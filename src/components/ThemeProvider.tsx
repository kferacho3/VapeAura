"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextShape {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextShape>({
  theme: "light",
  /* eslint-disable @typescript-eslint/no-empty-function */
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  /** Sync `<html>` class + `localStorage` */
  const apply = (next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  /* First run – read saved choice or system preference */
  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      apply(saved);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      apply(initial);
    }
  }, []);

  /* Toggle callback (sun ⇆ moon) */
  const toggleTheme = () =>
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      apply(next);
      return next;
    });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
