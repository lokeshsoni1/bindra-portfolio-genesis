
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "blue" | "purple" | "teal" | "rose" | "green" | "amber" | "red";
type Mode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "blue";
  });
  
  const [mode, setModeState] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("mode") as Mode;
    if (savedMode) {
      return savedMode;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    // Update theme class
    const themeClasses = ["theme-blue", "theme-purple", "theme-teal", "theme-rose", "theme-green", "theme-amber", "theme-red"];
    document.documentElement.classList.remove(...themeClasses);
    
    if (theme !== "blue") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const setTheme = (theme: Theme) => {
    setThemeState(theme);
  };

  const setMode = (mode: Mode) => {
    setModeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
