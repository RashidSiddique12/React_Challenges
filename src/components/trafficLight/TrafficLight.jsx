import { useEffect, useState } from "react"
import "./style.css"

function TrafficLight() {
  const [color, setColor] = useState("red");

  const chooseColor = ()=>{
    console.log(color)
    if(color === "red"){
      setColor("green")
    }
    else if(color === "green"){
      setColor("yellow")
    }else{
      setColor("red");
    }
  }

  useEffect(()=>{
   setTimeout(chooseColor, 500);

  },[color])
  return (
    <div>
      <div className="traffic">
        <div className={` grey ${color === "red" ? "red" : null}`}></div>
        <div className={`grey ${color === "green" ? "green" : null}`}></div>
        <div className={`grey ${color === "yellow" ? "yellow" : null}`}></div>
      </div>
    </div>
  )
}

export default TrafficLight
