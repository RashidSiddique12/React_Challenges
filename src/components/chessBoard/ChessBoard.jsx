import { useState } from "react";

function ChessBoard() {
  const board = [];
  for (let i = 1; i <= 8; i++) {
    const row = [];
    for (let j = 1; j <= 8; j++) {
      if((i+j)%2 === 0){
        row.push(true)
      }else{
        row.push(false)
      }
    }
    board.push(row);
  }
  return (
    <div style={{ backgroundColor: "grey", height: "100vh",}}>
      <div>
        {board.map((_, rowindex) => (
          <div key={rowindex} style={{ display: "flex", width: "450px" }}>
            {board[rowindex].map((ele, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: ele ? "black" : "white",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChessBoard;
