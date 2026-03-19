import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      style={{ marginBottom: "20px" }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}