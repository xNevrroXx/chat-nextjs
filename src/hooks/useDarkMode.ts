import {useCallback, useEffect, useState} from "react";

const useDarkMode = (defaultValue: "dark" | "light", onChange: (newMode: "dark" | "light") => void) => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  useEffect(() => {
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localStorageMode: "dark" | "light" | null = localStorage.getItem("themeMode") ? localStorage.getItem("themeMode") as "dark" | "light" : null;

    if (localStorageMode) {
      setMode(localStorageMode);
    }
    else if (systemDarkMode) {
      setMode("dark");
      localStorage.setItem("themeMode", "dark");
    }
    else {
      setMode(defaultValue);
      localStorage.setItem("themeMode", defaultValue ? "dark" : "light");
    }
  }, [])

  useEffect(() => {
    onChange(mode);
  }, [mode])

  const changeMode = useCallback(() => {
    setMode(isDark => {
      return (isDark === "dark" ? "light" : "dark");
    });
    localStorage.setItem("themeMode", (mode === "dark" ? "light" : "dark"));
  }, [mode])

  return {isDark: mode === "dark", changeMode};
}

export {useDarkMode};