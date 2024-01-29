import { createContext, useContext, useState } from "react";

export const homeContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("rashid");

  const greet = () => {
    setName((prev) => "Hello " + prev);
  };

  return (
    <homeContext.Provider value={{ name, setName, greet }}>
      {children}
    </homeContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(homeContext);
};
