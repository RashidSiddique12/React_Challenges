import { useState } from "react";

function AnagramChecker() {
  const [firstV, setFirstV] = useState();
  const [secondV, setSecondV] = useState();
  const [message, setMessage] = useState("");


  const handleCheck = () => {
    let secondValue = secondV;
    let temp ="";
    for(let i=secondValue.length-1; i>= 0; i--){
        temp +=secondValue.charAt(i);
    }
    if(firstV === temp){
         setMessage("The words/phrases are anagrams!")
    }else{
        setMessage("The words/phrases are not anagrams.")
    }

  };
  return (
    <div>
      <input
        type="text"
        placeholder="first value"
        value={firstV}
        onChange={(e) => setFirstV(e.target.value)}
        style={{padding : "0.5rem", margin: "1rem"}}
      />
      <input
        type="text"
        placeholder="second value"
        value={secondV}
        onChange={(e) => setSecondV(e.target.value)}
        style={{padding : "0.5rem", margin: "1rem"}}
      />
      <button onClick={handleCheck}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default AnagramChecker;
