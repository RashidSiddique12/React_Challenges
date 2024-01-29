import { useState } from "react";
const quotes = {
  history: [
    { quote: "1 life is challenging but its beatiful", author: "rashid1" },
    {
      quote:
        "Life is what happens to you while you're busy making other plans.",
      author: "rashid2",
    },
  ],
  motivation: [
    { quote: "1 life is challenging but its beatiful", author: "rashid3" },
    {
      quote:
        "Life is what happens to you while you're busy making other plans.",
      author: "rashid4",
    },
  ],
  sport: [
    { quote: "1 life is challenging but its beatiful", author: "rashid5" },
    {
      quote:
        "Life is what happens to you while you're busy making other plans.",
      author: "rashid6",
    },
  ],
};
function QuoteGenerator() {
  const [data, setData] = useState(quotes);
  const [inputVal, setInputVal] = useState("");
  const [mess, setMess] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data[inputVal])
    const random = Math.floor(Math.random() * data[inputVal].length);
    setMess(data[inputVal][random].quote);
    setName(data[inputVal][random].author);
  };
  return (
    <div>
      <h1>Quote Generator</h1>
      {mess ? (
        <h2>
          {mess} <br />
          <h5>{name}</h5>
        </h2>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="history motivation sport"
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default QuoteGenerator;
