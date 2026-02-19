"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-9 w-9 rounded-full border border-gray-200 p-2 text-gray-400 opacity-50">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </button>
    );
  }

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Laptop;

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-gray-200 p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      <Icon className="h-[1.2rem] w-[1.2rem]" />
    </button>
  );
}
