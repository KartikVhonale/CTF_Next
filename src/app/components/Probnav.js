"use client"
import React from 'react'
import Router, { useRouter } from 'next/navigation'
import '../style/style_probnav.css'
import ButtonNum1 from './ButtonNum1'
const Probnav = (props) => {
      const router =useRouter();
      const b = parseInt(props.currentQ)-1;
      const c = parseInt(props.currentQ)+1;
      function handlePrev(){
        if(b>=0)
        router.push(`/questions/${b}`);
      }
      function handleNext(){
        if(c<7)
        router.push(`/questions/${c}`);
      }
  return (
    <>
    <div className='column'>
        {/* {props.currentQ} */}
        <button className='back' onClick={handlePrev}> Previous </button>
        <ButtonNum1 num={1}/>
        <ButtonNum1 num={2}/>
        <ButtonNum1 num={3}/>
        <ButtonNum1 num={4}/>
        <ButtonNum1 num={5}/>
        <ButtonNum1 num={6}/>
        <ButtonNum1 num={7}/>
        <button className='back' onClick={handleNext}> Next </button>
    </div>
    </>
  )
}

export default Probnav