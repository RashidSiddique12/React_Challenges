import { useState } from "react";
import Counter from "./Counter";
import { v4 as uuidv4 } from "uuid";

function Counters() {
  const [counters, setCounters] = useState([]);

  const handleNewCounter = () => {
    const id = uuidv4();
    setCounters([...counters, { id: id, value: 0 }]);
  };

  const onIncrement = (idx) => {
    setCounters(
      counters.map((item) => {
        if (item.id === idx) {
          return {
            id: item.id,
            value: item.value + 1,
          };
        } else {
          return item;
        }
      })
    );
  };
  const onDecrement = (idx) => {
    setCounters(
      counters.map((item) => {
        if (item.id === idx) {
          return { id: item.id, value: item.value - 1 };
        } else {
          return item;
        }
      })
    );
  };

  const onDelete = (idx) => {
    setCounters(counters.filter((item) => item.id !== idx));
  };

  const handleReset = () => {
    setCounters(
      counters.map((item) => {
        return { ...item, value: 0 };
      })
    );
  };

  return (
    <div>
      <button onClick={handleNewCounter}>Add Counter</button>
      <button onClick={handleReset}>Reset All</button>
      {counters.map(({ value, id }) => (
        <Counter
          key={id}
          value={value}
          onIncrement={() => onIncrement(id)}
          onDecrement={() => onDecrement(id)}
          onDelete={() => onDelete(id)}
        />
      ))}
    </div>
  );
}

export default Counters;
