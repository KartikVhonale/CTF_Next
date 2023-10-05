// "use client";
// import { useState, createContext, ReactNode, useContext, useEffect } from "react";

// export const DataContext = createContext<ContextInterface>(null);

// export const DataStateProvider = ({ children }) => {
//   const [points,setPoints] = useState(0);
//   const [flags,setFlags] = useState(0);
//   const value = { points, setPoints, flags, setFlags };
//   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
// };