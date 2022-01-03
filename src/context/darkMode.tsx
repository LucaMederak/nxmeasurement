import React, { createContext, useContext, FC, useState, useMemo } from "react";

//types
type DarkMode = boolean;

interface ITheme {
  darkMode: DarkMode;
  handleDarkMode: () => void;
}

const ThemeContext = createContext<ITheme | null>(null);

export const useDarkMode = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("Dark mode is not available");
  }
  return theme;
};

export const DarkModeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<DarkMode>(false);

  const contextValue = useMemo(
    () => ({ darkMode: mode, handleDarkMode: () => setMode(!mode) }),
    [mode, setMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
