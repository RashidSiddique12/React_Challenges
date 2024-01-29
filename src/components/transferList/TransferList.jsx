import { useState } from "react";
import "./transferList.css";

const left = [
  { id: 1, sub: "html", select: false },
  { id: 2, sub: "js", select: false },
  { id: 3, sub: "css", select: false },
  { id: 4, sub: "sass", select: false },
];
const right = [
  { id: 5, sub: "react", select: false },
  { id: 6, sub: "Anugular", select: false },
  { id: 7, sub: "spring", select: false },
  { id: 8, sub: "rashid", select: false },
];

function TransferList() {
  const [leftList, setLeftList] = useState(left);
  const [rightList, setRightList] = useState(right);

  const handleLeftCheck = (idx) => {
    setLeftList(
      leftList.map((list) => {
        if (list.id === idx) {
          return { ...list, select: !list.select };
        } else {
          return list;
        }
      })
    );
  };
  const handleRightCheck = (idx) => {
    setRightList(
      rightList.map((list) => {
        if (list.id === idx) {
          return { ...list, select: !list.select };
        } else {
          return list;
        }
      })
    );
  };

  const handleShifRight = () => {
    let shifArr = leftList.filter((list) => list.select === true);
    shifArr = shifArr.map((list) => ({ ...list, select: false }));

    setRightList([...rightList, ...shifArr]);
    shifArr = [];

    setLeftList(
      leftList.filter((list) => {
        if (list.select !== true) {
          return list;
        }
      })
    );
  };

  const handleShifLeft = () => {
    let shifArr = rightList.filter((list) => list.select === true);
    shifArr = shifArr.map((list) => ({ ...list, select: false }));

    setLeftList([...leftList, ...shifArr]);
    shifArr = [];

    setRightList(
      rightList.filter((list) => {
        if (list.select !== true) {
          return list;
        }
      })
    );
  };

  const handleShifAllRight = () => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
  };
  const handleShifAllLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
  };

  return (
    <div className="mainBox">
      <div className="Box">
        {leftList.map(({ id, sub, select }) => {
          return (
            <div key={id}>
              <label>
                <input
                  type="checkBox"
                  checked={select}
                  onChange={() => handleLeftCheck(id)}
                />
                {sub}
              </label>
              <br />
            </div>
          );
        })}
      </div>
      <div className="Box">
        <button onClick={handleShifAllRight}>{">>"}</button>
        <br />
        <button onClick={handleShifRight}>{">"}</button>
        <br />
        <button onClick={handleShifLeft}>{"<"}</button>
        <br />
        <button onClick={handleShifAllLeft}>{"<<"}</button>
        <br />
      </div>
      <div className="Box">
        {rightList.map(({ id, sub, select }) => {
          return (
            <div key={id}>
              <label>
                <input
                  type="checkBox"
                  checked={select}
                  onChange={() => handleRightCheck(id)}
                />
                {sub}
              </label>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TransferList;
