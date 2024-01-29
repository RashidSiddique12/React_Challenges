import { useEffect, useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState("");

  const winner = (squares) => {
    const possible = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5],[6,7,8]];
    for(let i=0; i<possible.length; i++){
      const [x,y,z] = possible[i];
      if(squares[x] !== "" && squares[x] === squares[y] && squares[x] === squares[z]){
        return squares[z];
      }
    }
    return null;
  };

  useEffect(()=>{
    if(!winner(squares) && squares.every(item=>item !== "")){
      setStatus(`Match is draw Restart to play again`)
    }
    else if(winner(squares)){
      setStatus(`Winner is ${winner(squares)} Restart to play again`)
    }
    else{
      setStatus(`Next turn is ${isX? 'X' : '0'}`)
    }
  },[isX])

  const handleClick = (index) => {
    if (squares[index] !== "" || winner(squares) ) return;
    const copy = [...squares];
    copy[index] = isX ? "X" : "0";
    setSquares(copy);
    setIsX((prev) => !prev);
  };

  console.log(squares);
  console.log(status);
  return (
    <div>
      <div style={{ width: "320px", display: "flex", flexWrap: "wrap" }}>
        {squares.map((square, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid",
              fontSize: "20px",
            }}
          >
            {square}
          </button>
        ))}
        <h2>{status}</h2>
        <button onClick={()=>setSquares(squares.map((sq)=> sq =""))}>Restart</button>
      </div>
    </div>
  );
}

export default TicTacToe;

// const arr = [
//   { id: 1, val: null },
//   { id: 2, val: null },
//   { id: 3, val: null },
//   { id: 4, val: null },
//   { id: 5, val: null },
//   { id: 6, val: null },
//   { id: 7, val: null },
//   { id: 8, val: null },
//   { id: 9, val: null },
// ];
// function TicTacToe() {
//   const [data, setData] = useState(arr);
//   const [toggle, setToggle] = useState(false);
//   const [message, setMessage] = useState("");
//   const [stop, setStop] = useState(true)

//   useEffect(() => {
//     if (
//       (data[0].val &&
//         data[0].val === data[4].val &&
//         data[0].val === data[8].val) ||
//       (data[0].val &&
//         data[0].val === data[1].val &&
//         data[0].val === data[2].val) ||
//       (data[0].val &&
//         data[0].val === data[3].val &&
//         data[0].val === data[6].val) ||
//       (data[1].val &&
//         data[1].val === data[4].val &&
//         data[1].val === data[7].val) ||
//       (data[2].val &&
//         data[2].val === data[4].val &&
//         data[2].val === data[6].val) ||
//       (data[2].val &&
//         data[2].val === data[5].val &&
//         data[2].val === data[8].val) ||
//       (data[3].val &&
//         data[3].val === data[4].val &&
//         data[3].val === data[5].val) ||
//       (data[6].val &&
//         data[6].val === data[7].val &&
//         data[6].val === data[8].val)
//     ) {
//       setMessage(`Winner ${toggle ? "0" : "X"}`);
//       setStop(prev => !prev)
//     }
//   }, [data]);

//   //   console.log(data);
//   const handleClick = (id) => {
//     setData((data) =>
//       data.map((d) => {
//         if (d.id === id && d.val == null) {
//           return { ...d, val: toggle ? "X" : "0" };
//         } else {
//           return d;
//         }
//       })
//     );

//     console.log("dddd", data[0].val);

//     setToggle((prev) => !prev);
//   };

//   return (
//     <div style={{ width: "320px", display: "flex", flexWrap: "wrap" }}>
//       {data.map(({ id, val }) => (
//         <div
//           key={id}
//            onClick={() => stop && handleClick(id)}
//           style={{ width: "100px", height: "100px", border: "1px solid black" }}
//         >
//           <p>{val !== null ? val : null}</p>
//         </div>
//       ))}

//       <p> {message !== "" ? message : null}</p>
//     </div>
//   );
// }

// export default TicTacToe;
