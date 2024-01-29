import React from "react";

// eslint-disable-next-line react/prop-types
function Lists({ name, handleDelete, handleUpdate }) {
  return (
    <div>
      <span>name : {name}</span>{" "}
      <span>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleUpdate}>Edit</button>
      </span>
    </div>
  );
}

export default Lists;
