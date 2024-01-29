import { useState } from 'react'
import './style.css'

function ToggleMode() {
  const [mode, setMode] = useState("white");
  return (
    <>

    <div className={mode}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit inventore pariatur, nesciunt quod doloribus.</h2>
      
    </div>
    <button className="toggleBtn" onClick={()=>{
      mode === "white" ? setMode("grey") : setMode("white")
    }}>Toggle Theme</button>
    </>
  )
}

export default ToggleMode
