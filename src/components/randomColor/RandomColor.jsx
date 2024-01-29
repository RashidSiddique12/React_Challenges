import { useState } from "react";

function RandomColor() {
  const [bgColor, setBgColor] = useState("green");
  const [typeColor, setTypeColor] = useState("hex");

  const handleColor = () => {
    if (typeColor === "hex") {
      handleHex();
    } else {
      handleRGB();
    }
  };
  const indexUtility = (length) => Math.floor(Math.random() * length);
  const handleHex = () => {
    const hexColor = "1234567890ABCDE";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexColor[indexUtility(hexColor.length)];
    }
    setBgColor(color);
  };

  const handleRGB = () => {
    const r = indexUtility(256);
    const g = indexUtility(256);
    const b = indexUtility(256);
    setBgColor(`rgb(${r},${g},${b})`);
  };

  console.log(bgColor);
  return (
    <div style={{ backgroundColor: bgColor, width: "100vw", height: "100vh" }}>
      <button onClick={handleColor}>random Color</button>
      <button onClick={() => setTypeColor("hex")}>chose HEX Color</button>
      <button onClick={() => setTypeColor("rgb")}>chose RGB Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{bgColor}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
