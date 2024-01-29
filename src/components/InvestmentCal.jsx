import React, { useState } from "react";

function InvestmentCal() {
  const [amount, setAmount] = useState(0);
  const [year, setYear] = useState(0);
  const [dur, setDur] = useState(0);
  const [int, setInt] = useState(0);
  const [obj, setObj] = useState(null);

  let object = [];
  const handleCal = () => {
    for (let i = 1; i <= dur; i++) {
      object.push({ id: i, saving: amount * i * int, interset: int });
      console.log("fk");
    }
    setObj([...object]);
  };
  return (
    <div>
      <br />
      <br />
      Amount :
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      yearsaving :{" "}
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      />{" "}
      <br />
      interest :{" "}
      <input
        type="text"
        value={int}
        onChange={(e) => setInt(Number(e.target.value))}
      />
      Duration :
      <input
        type="text"
        value={dur}
        onChange={(e) => setDur(Number(e.target.value))}
      />{" "}
      <br />
      <button onClick={handleCal}>Calculate</button>
      <br />
      <br />
      <br />
      <p>amount {"   "} interest</p>
      {obj &&
        obj.map(({ id, saving, interset }) => (
          <p key={id}>
            {id}-
            {saving} {interset}
          </p>
        ))}
    </div>
  );
}

export default InvestmentCal;
