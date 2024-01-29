import { useState } from "react";
import "./style.css"

const question = [
  {
    id: 1,
    q: "what is your name",
    option: [
      { id: 11, op1: "rashid", ans: true },
      { id: 12, op1: "Motu", ans: false },
      { id: 13, op1: "Manu", ans: false },
      { id: 14, op1: "Sanu", ans: false },
    ],
  },
  {
    id: 2,
    q: "what is your name",
    option: [
      { id: 21, op1: "rashid", ans: true },
      { id: 22, op1: "Motu", ans: false },
      { id: 23, op1: "Manu", ans: false },
      { id: 24, op1: "Sanu", ans: false },
    ],
  },
  {
    id: 3,
    q: "what is your name",
    option: [
      { id: 31, op1: "rashid", ans: true },
      { id: 32, op1: "Motu", ans: false },
      { id: 33, op1: "Manu", ans: false },
      { id: 34, op1: "Sanu", ans: false },
    ],
  },
  {
    id: 4,
    q: "what is your name",
    option: [
      { id: 41, op1: "rashid", ans: true },
      { id: 42, op1: "Motu", ans: false },
      { id: 43, op1: "Manu", ans: false },
      { id: 44, op1: "Sanu", ans: false },
    ],
  },
];

function Quiz() {
  const [data, setData] = useState(question);
  const [pageNo, SetPageNo] = useState(1);
  return (
    <div className="quiz">
      <h1 style={{ textAlign: "center" }}>Quiz App</h1>
      {pageNo <= data.length && data.map((d) => (
       d.id === pageNo ? <li key={d.id} className="questionSection">
          <h3>{`${d.id} ) `}{d.q}</h3>
          {d.option.map((op) => (
            <p key={op.id}> {op.op1}</p>
          ))}
          <button onClick={()=> SetPageNo(prev => prev+1)}>{pageNo} {"=>"}</button>
        </li> : null
      ))}
    </div>
  );
}

export default Quiz;
