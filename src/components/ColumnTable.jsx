import { useState } from "react";

function ColumnTable() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  let array = [];
  for(let i=1; i<=row; i++){
    const arr = []
    for(let j=1; j<=column; j++){
        arr.push(j) 
    }
    array.push(arr);
  }

  console.log(array);
  return (
    <div>
      <div className="head">
        Row({row}) :{" "}
        <input
          type="range"
          min={2}
          max={10}
          value={row}
          onChange={(e) => setRow(Number(e.target.value))}
        />
        Column({column}) :{" "}
        <input
          type="range"
          min={2}
          max={10}
          value={column}
          onChange={(e) => setColumn(Number(e.target.value))}
        />
      </div>
   {
    array.map((_, rowIndex)=>(
        <div key={rowIndex} style={{display: "flex"}}>
            {array[rowIndex].map((_, colIndex)=>(
                <div key={colIndex} style={{width: "50px", height: "50px", border: "1px solid black"}}>
                    <p>{rowIndex+1 * colIndex + 1}</p>
                </div>
            ))}
        </div>
    ))
   }
    </div>
  );
}

export default ColumnTable;
