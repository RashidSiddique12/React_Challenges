import { useState } from "react";
import "./style.css";
import useLocalStorage from "./useLocalStorage";

function ThemeChanger() {
  // const [bg, setBg] = useState("white")
  const [bg, setBg] = useLocalStorage("theme", "white");

  const handleChange = () => {
    setBg(bg === "white" ? "black" : "white");
  };
  return (
    <div className="box" data-theme={bg}>
      <button onClick={handleChange}>Toggle</button>
    </div>
  );
}

export default ThemeChanger;
