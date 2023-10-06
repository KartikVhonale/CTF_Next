"use client";
import { useState, createContext, useContext, useEffect } from "react";

const PointsData = createContext(null);

function PointsProvider({ children }) {
    const [points,setPoints] = useState(0);
    const [flags,setFlags] = useState(0);
    const hints10={
      hints:[
       {id:1,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:2,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:3,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:4,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:5,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:6,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:7,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:8,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:9,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      {id:10,
        ansCorrect:0,  
        hint1:0,
        hint2:0,
        hint3:0,
      },
      ]
    }
    return (
      <PointsData.Provider value={{points, setPoints, flags, setFlags }}>
        {children}
      </PointsData.Provider>
    )
  }

  export default PointsProvider;
  export const usePointsContext = () => useContext(PointsData);