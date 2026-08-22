"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const nextDark =
      !document.documentElement.classList.contains("dark");

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setDark(nextDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="hover-button flex size-10 items-center justify-center border border-[var(--border)] bg-[var(--surface)]"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}