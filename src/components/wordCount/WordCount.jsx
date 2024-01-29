import { useState } from "react"


function WordCount() {
  const [word, setWord] = useState();
  const [char, setChar] = useState();
  const [para, setPara] = useState();
  const [string, setString] = useState();

  const handleCount = ()=>{
    setChar(string.length);
    setWord(string.split(" ").length + string.split("\n").length - 1);
    setPara(string.split("\n").length);
  }

  const handleReset = ()=>{
    setWord("");
    setChar("");
    setPara("");
    setString("");
  }

  return (
    <div>
      <textarea value={string} onChange={(e)=>setString(e.target.value)} cols="25" rows="10" placeholder="Entre"></textarea>
      <br />
      <button onClick={handleCount}>Count</button>
      <button onClick={handleReset}>Reset</button>

      <p>Word : {word}</p>
      <p>Character : {char}</p>
      <p>Para : {para}</p>

      
    </div>
  )
}

export default WordCount
