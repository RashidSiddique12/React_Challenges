import React from "react";
import useFetch from "./usefetch";

function Fetch() {
  const { loading, error, data } = useFetch(`https://dummyjson.com/products`, {});

  console.log(loading, error, data);
  return (
    <div>
      {loading ? <h2>{loading}</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {data && data.products
        ? data.products.map((pro) => <li key={pro.id}>{pro.title}</li>)
        : null}
    </div>
  );
}

export default Fetch;
