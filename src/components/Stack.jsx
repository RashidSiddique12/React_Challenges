import { useState } from "react";

function Stack() {
  const [data, setData] = useState([]);
  const [newValue, setNewValue] = useState("");
  const [message, setMessage] = useState("");
  const handlePush = () => {
    if (data.length <= 4) {
      setMessage(`Push data : ${newValue}`);
      setData([newValue, ...data]);
      setNewValue("");
    }
    else{
        setMessage("stack is Full");
    }
  };
  const handlePop = () => {
    if(data.length > 0){
        const popData = data[0];
    setMessage(`Pop data : ${popData}`);
    const arr = data.slice(1);
    setData([...arr]);
    }
    else{
        setMessage("stack is Empty");
    }
  };
  const handlePeek = () => {
    const popData = data[0];
    setMessage(`Peek data : ${popData}`);
  };
  const handleIsEmpty = () => {
    const check = data.length > 0 ? "not Empty" : "Yes Empty";
    setMessage(check);
  };
  const hansleIsFull = () => {
    const check = data.length >= 5 ? "Yes Full" : "Not Full";
    setMessage(check);
  };
  return (
    <div>
      <input
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <br />
      <div>
        <span>
          <button onClick={handlePush}>PUSH</button>
        </span>
        <span>
          <button onClick={handlePop}>POP</button>
        </span>
        <span>
          <button onClick={handlePeek}>PEEK</button>
        </span>
        <span>
          <button onClick={handleIsEmpty}>ISEMPTY</button>
        </span>
        <span>
          <button onClick={hansleIsFull}>ISFULL</button>
        </span>
      </div>

      {data && data.map((d) => <p key={d}>{d}</p>)}
      {message && <p> {message}</p>}
    </div>
  );
}

export default Stack;
