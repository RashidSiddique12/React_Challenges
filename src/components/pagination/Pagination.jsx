import { useState } from "react";

const obj = [
  { id: 1, name: "rashid" },
  { id: 2, name: "rashid" },
  { id: 3, name: "rashid" },
  { id: 4, name: "rashid" },
  { id: 5, name: "rashid" },
  { id: 6, name: "rashid" },
  { id: 7, name: "rashid" },
  { id: 8, name: "rashid" },
  { id: 9, name: "rashid" },
  { id: 10, name: "rashid" },
];
const limit = 3;
function Pagination() {
  const [data, setData] = useState(obj);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / limit);
  const indexLastItem = currentPage * limit;
  const indexFirstItem = indexLastItem - limit;
  const currentData = data.slice(indexFirstItem, indexLastItem);
  return (
    <div>
      <div>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          next
        </button>
      </div>
      {currentData.map((d) => (
        <li key={d.id}>
          {d.id} {d.name}
        </li>
      ))}
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
