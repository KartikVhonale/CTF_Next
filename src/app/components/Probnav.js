"use client"
import React from 'react'
import Router, { useRouter } from 'next/navigation'
import '../style/style_probnav.css'
const Probnav = () => {
    const router =useRouter();
    const handleClick = (a) => {
        router.push('/questions/${a}');
      };
      
  return (
    <>

    <div className='column'>
        <button className='back'> Previous </button>
        <button className='buttonnum' onClick={()=>{{handleClick(1);}}}>1</button>
        <button className='buttonnum' onClick={()=>{{handleClick(2);}}}>2</button>
        <button className='buttonnum' onClick={()=>{{handleClick(3);}}}>3</button>
        <button className='buttonnum' onClick={()=>{{handleClick(4);}}}>4</button>
        <button className='buttonnum' onClick={()=>{{handleClick(5);}}}>5</button>
        <button className='buttonnum' onClick={()=>{{handleClick(6);}}}>6</button>
        <button className='buttonnum' onClick={()=>{{handleClick(7);}}}>7</button>
        <button className='back'> Next </button>
    </div>
    </>
  )
}

export default Probnav