"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const Points_data = createContext(null);

// export const DataStateProvider = ({ children }) => {
//   const [points,setPoints] = useState(0);
//   const [flags,setFlags] = useState(0);
//   const value = { points, setPoints, flags, setFlags };
//   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
// };
function Context({ children }) {
    const [points,setPoints] = useState(0);
    const [flags,setFlags] = useState(0);
  
    return (
      <Points_data.Provider value={{points, setPoints, flags, setFlags }}>
        {children}
      </Points_data.Provider>
    );
  }

  export default Context;