/* eslint-disable react/prop-types */
function Counter({ value, onIncrement, onDecrement, onDelete }) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button style={{ backgroundColor: "red" }} onClick={onDelete}>
        X
      </button>
      <h2>{value}</h2>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Counter;
