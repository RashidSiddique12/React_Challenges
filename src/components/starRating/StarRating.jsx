import { useState } from "react";
import "./style.css";
import StarRateIcon from "@mui/icons-material/StarRate";


function StarRating({noOfStart = 10}) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick =(index)=>{
    setRating(index + 1 )
  }
  const handleMouseOver = (index)=>{
    setHover(index+1)
  }
  const handleMouseLeave = ()=>{
    setHover(rating)
  }
  return (
    <div>
      {[...Array(noOfStart)].map((_, index)=>
      <StarRateIcon key={index}
      className={index < hover ? "active" : "inactive"}
      onClick = {()=>handleClick(index)}
      onMouseOver = {()=>handleMouseOver(index)}
      onMouseLeave = {handleMouseLeave}
      />)}
    </div>
  )
}

export default StarRating




// const startArr = [
//   { id: 1, state: false },
//   { id: 2, state: false },
//   { id: 3, state: false },
//   { id: 4, state: false },
//   { id: 5, state: false },
// ];
// function StarRating() {
//   const [data, setData] = useState(startArr);
//   const [click, setClick] = useState(false);

//   const handleOver = (id) => {
//     setData(
//       data.map((d) => {
//         if (d.id <= id) {
//           return { ...d, state: true };
//         } else {
//           return d;
//         }
//       })
//     );

//     setClick(false);
//   };

//   const handleOut = () => {
//     if (click) return;
//     setData(
//       data.map((d) => {
//         return { ...d, state: false };
//       })
//     );
//   };

//   const handleClick = (id) => {
//     setData(
//       data.map((d) => {
//         if (d.id <= id) {
//           return { ...d, state: true };
//         } else {
//           return d;
//         }
//       })
//     );
//     setClick(true);
//   };

//   return (
//     <div>
//       <h2>Rating...</h2>
//       <div>
//         {data.map(({ id, state }) => (
//           <span
//             key={id}
//           >
//             <StarRateIcon
//               onMouseOver={() => handleOver(id)}
//               onMouseLeave={() => handleOut(id)}
//               onClick={() => handleClick(id)}
//               sx={{ color: state ? "yellow" : "grey" }}
//             />
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StarRating;
