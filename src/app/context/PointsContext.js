"use client";

import { useState, createContext, useContext, useEffect } from "react";
const PointsData = createContext(null);

function PointsProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [flags, setFlags] = useState(0);
  const [user, setUser] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const storedPoints = parseInt(localStorage.getItem("data_points"));
      const storedFlags = parseInt(localStorage.getItem("data_flags"));
      const storedUser = JSON.parse(localStorage.getItem("data_user"));
      const storedData = JSON.parse(localStorage.getItem("data_data"));

      if (!isNaN(storedPoints)) {
        setPoints(storedPoints);
      }
      if (!isNaN(storedFlags)) {
        setFlags(storedFlags);
      }
      if (!storedData) {
        setData(storedData);
      }
      if(!storedUser){
        setUser(storedUser);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (points != 0 && flags != 0) {
      localStorage.setItem("data_points", points.toString());
      localStorage.setItem("data_flags", flags.toString());
      localStorage.setItem("data_User", JSON.stringify());
      localStorage.setItem("data_data", JSON.stringify(data));
    }
  }, [points, flags, user,data]);

  function updateHints(newData) {
    const temp = { ...data };
    temp[newData.questionNumber] = newData.data;
    setData(temp);
  }

  return (
    <PointsData.Provider value={{ points, setPoints, flags, setFlags,user,setUser, data, updateHints }}>
      {children}
    </PointsData.Provider>
  );
}

export default PointsProvider;
export const usePointsContext = () => useContext(PointsData);

// {
//   questionNumber: 2,
//   data: {
//     anscorrect: false,
//   }
// }
// updateHints({
//   questionNumber: 2,
//   data: {
// 
//   }
// });
// questionNumber: 2;
    // data: {
    //   ansCorrect: false,
    //   hint1:false,
    //   hint2:false,
    //   hint3:false,
    //   timeCompletion: new Date();
    // }
  