import React, { useState } from "react";
// import ListPage from "./ListPage";

const arr = [
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam!",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nostrum cumque neque eveniet. Doloribus, rem laudantium. Laborum cumque voluptatibus fuga.",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam!",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nostrum cumque neque eveniet. Doloribus, rem laudantium. Laborum cumque voluptatibus fuga.",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam!",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nostrum cumque neque eveniet. Doloribus, rem laudantium. Laborum cumque voluptatibus fuga.",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam!",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nostrum cumque neque eveniet. Doloribus, rem laudantium. Laborum cumque voluptatibus fuga.",
  },
];
function Accordion() {
  const [select, setSelect] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleOpen = (id) => {
    setSelect(select === id ? null : id);
  };

  const handleMultiple = (id) => {
    const copy = [...multiple];

    const found = copy.indexOf(id);
    if (found !== -1) {
      copy.splice(found, 1);
    } else {
      copy.push(id);
    }
    setMultiple(copy);
  };
  console.log(multiple);
  return (
    <div>
      <div>
        <button onClick={() => setEnableMultiSelect((prev) => !prev)}>
          {" "}
          {enableMultiSelect ? "Mutiple select" : "single select"}
        </button>
        {arr.map((data) => (
          <div key={data.id}>
            <div
              onClick={() =>
                enableMultiSelect
                  ? handleMultiple(data.id)
                  : handleOpen(data.id)
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "2rem",
                backgroundColor: "grey",
                margin: "1rem",
              }}
            >
              <h1>{data.question}</h1>
              <h1>
                {" "}
                {enableMultiSelect
                  ? multiple.indexOf(data.id) !== -1
                    ? "-"
                    : "+"
                  : select === data.id
                  ? "-"
                  : "+"}{" "}
              </h1>
            </div>
            <div style={{ backgroundColor: "grey", margin: "0 1rem" }}>
              {enableMultiSelect ? (
                multiple.indexOf(data.id) !== -1 ? (
                  <h4>
                    {data.answer}
                    {data.answer}
                  </h4>
                ) : null
              ) : select === data.id ? (
                <h4>
                  {data.answer}
                  {data.answer}
                </h4>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
