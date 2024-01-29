import { useState } from "react";

function Clock() {
  // const [intial, setIntial] = useState(0);
  // const [reset, setReset] = useState(null);
  // const [onetym, setonetym] = useState(false);

  // const handleStart = () => {
  //   const interval = setInterval(() => {
  //     setIntial((prev) => prev + 1);
  //   }, 1);

  //   setReset(interval);
  //   setonetym(true);
  // };
  // const handleReset = () => {
  //   setIntial(0);
  //   clearInterval(reset);
  //   setonetym(false);
  // };

  // const handleStop = () => {
  //   clearInterval(reset);
  //   setonetym(false);
  // };
  const [intial, setIntial] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = ()=>{
    const interId = setInterval(() => {
      setIntial(prev => prev+1)
    }, 10);

    setIntervalId(interId)
  }
  const handleStop = ()=>{
      clearInterval(intervalId)
  }
  const handleReset = ()=>{
    setIntial(0);
    clearInterval(intervalId)
  }
  return (
    <>
      <p>
        {Math.floor(intial/1000)} : {Math.floor((intial/100)%10)} : {intial%100}
      </p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </>
    // <div>
    //   {/* <h1>{Math.floor(intial/10000)} :{Math.floor(intial/1000)} : {intial%1000}</h1>
    //   <button onClick={handleStart} disabled={onetym}>Start</button>
    //   <button onClick={handleStop}>Stop</button>
    //   <button onClick={handleReset}>Reset</button> */}
    // </div>
  );
}

export default Clock;
