import { data } from "./components/data";
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [stacks, setStack] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const newStacks = data.map((stack) => {
      return stack.name;
    });
    console.log(newStacks);
    setStack(newStacks);
  }, []);
  return (
    <AppContext.Provider value={{ loading, stacks }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGrobalContext = () => {
  return useContext();
};
export default { AppProvider, AppContext };
