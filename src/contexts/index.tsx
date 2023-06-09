import React, {
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

import { ThemeProvider } from "@pankod/refine-mui";
import { DarkTheme, LightTheme } from "@pankod/refine-mui";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: "light",
  setMode: () => {},
});

export const ColorModeContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  // const [mode, setMode] = useState<string>(
  //   colorModeFromLocalStorage || systemPreference
  // );
  const [mode, setMode] = useState<string>("light");

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const toggleMode = (newMode: string) => {
    setMode(newMode);
  };

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        setMode: toggleMode,
      }}
    >
      <ThemeProvider theme={mode === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
