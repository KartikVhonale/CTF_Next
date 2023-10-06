"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const PointsData = createContext(null);

// export const DataStateProvider = ({ children }) => {
//   const [points,setPoints] = useState(0);
//   const [flags,setFlags] = useState(0);
//   const value = { points, setPoints, flags, setFlags };
//   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
// };
function PointsProvider({ children }) {
    const [points,setPoints] = useState(0);
    const [flags,setFlags] = useState(0);
  
    return (
      <PointsData.Provider value={{points, setPoints, flags, setFlags }}>
        {children}
      </PointsData.Provider>
    );
  }

  export default PointsProvider;