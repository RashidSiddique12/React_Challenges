import React, { useEffect, useState } from "react";
import "./style.css";
const url = `https://picsum.photos/v2/list?page=1&limit=5`;
function Slider() {
  const [image, setImage] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setImage(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLeft = ()=>{
    setCurrent(current === 0 ? image.length - 1 : current - 1)
  }
  const handleRight = ()=>{
    setCurrent(current === image.length - 1 ? 0 : current + 1)
  }

  const handleIndicator=(index)=>{
    setCurrent(index)
  }

  return (
    <div className="container">
      <div className="leftArrow arrow" onClick={handleLeft}> {"<--"}</div>
      {image?.map(({ id, download_url }, index) => (
        <img src={download_url} alt={download_url} key={id} className={index === current? 'image' : 'image hideImage'} />
      ))}
      <div className="rightArrow arrow" onClick={handleRight}>{"-->"}</div>
     <div className="indicator">
     {image?.map(({ id }, index) => (
        <button key={id} onClick={()=> handleIndicator(index)}  className={index === current ? "" : "blurButton"}></button>
      ))}
     </div>
    </div>
  );
}

export default Slider;
