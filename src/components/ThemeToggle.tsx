"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="theme-toggle"
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      type="button"
    >
      <svg aria-hidden="true" className="theme-toggle-icon theme-toggle-sun" viewBox="0 0 24 24">
        <path d="M12 4.5V2m0 20v-2.5M4.5 12H2m20 0h-2.5M6.7 6.7 4.9 4.9m14.2 14.2-1.8-1.8m0-10.6 1.8-1.8M4.9 19.1l1.8-1.8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
      <svg aria-hidden="true" className="theme-toggle-icon theme-toggle-moon" viewBox="0 0 24 24">
        <path d="M20.2 15.2A7.6 7.6 0 0 1 8.8 3.8 8.6 8.6 0 1 0 20.2 15.2Z" />
      </svg>
    </button>
  );
}
