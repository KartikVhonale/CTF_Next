"use client"
import React from 'react'
import Router, { useRouter } from 'next/navigation'
import '../style/style_probnav.css'

const ButtonNum1 = (props) => {
        const router =useRouter();
        const handleClick = (a) => {
            const b = parseInt(a)-1;
            router.push(`/questions/${b}`);
          };
  return (
    <>
        <button className='buttonnum' onClick={()=>{{handleClick(props.num);}}}>{props.num}</button>
    </>
  )
}

export default ButtonNum1;