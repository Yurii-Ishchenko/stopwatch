import { useState } from "react";
import toggleThemeContext from "./context";

export default function Provider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const darkThemeStyles = { backgroundColor: "#333333", color: "#fff" };
  const lightThemeStyles = { backgroundColor: "#fff", color: "#333333" };
  const providerValue = {
    isDarkTheme,
    toggleTheme,
    darkThemeStyles,
    lightThemeStyles,
  };

  return (
    <toggleThemeContext.Provider value={providerValue}>
      {children}
    </toggleThemeContext.Provider>
  );
}
