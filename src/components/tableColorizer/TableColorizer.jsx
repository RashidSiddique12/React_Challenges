import { useState } from "react";
import "./style.css";

// import React from 'react'
const arr = [
  { id: 1, isbg: null },
  { id: 2, isbg: null },
  { id: 3, isbg: null },
  { id: 4, isbg: null },
  { id: 5, isbg: null },
  { id: 6, isbg: null },
  { id: 7, isbg: null },
  { id: 8, isbg: null },
  { id: 9, isbg: null },
];
function TableColorizer() {
  const [data, setData] = useState(arr);
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", inputValue);
    setData(
      data.map((item) => {
        if (item.id == Number(inputValue)) {
          return { ...item, isbg: "red" };
        } else {
          return item;
        }
      })
    );
    setInputValue("");
  };

  const handleClear=()=>{
    setData(data.map((item)=>({...item, isbg : null})))
  }
  console.log(data);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter box number to color"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
          <button onClick={handleClear}>Clear</button>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "320px",
          margin: "2px",
          color: "black",
        }}
      >
        {data.map(({ id, isbg }) => (
          <div
          
            key={id}
            className={isbg}
            style={{ width: "100px", border: "1px solid black" }}
          >
            <p>{id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableColorizer;
