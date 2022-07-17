import "./App.css";
import Price from "./components/Price";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Price togg={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
