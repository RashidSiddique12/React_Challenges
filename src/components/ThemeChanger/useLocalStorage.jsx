import { useEffect, useState } from "react";

function useLocalStorage(key, defaulValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || defaulValue;
    } catch (error) {
      currentValue = defaulValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;
