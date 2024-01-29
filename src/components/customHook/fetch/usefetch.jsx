import React, { useEffect, useState } from "react";

function useFetch(url, option = {}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url, option);
      const dataRes = await res.json();
      
      setData(dataRes);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
//   console.log(data)
  return { loading, error, data };
}

export default useFetch;
