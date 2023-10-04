"use client"
import React,{useState} from 'react'
import '@/app/style/style_main.css';
import '@/app/style/style_modal.css';
import Hint1 from './Hint1';
import Hint2 from './Hint2';
import Answer from './Answer';

const Dropdown = () => {
  const [showModal1,setShowModal1]= useState(false);
  const [showModal2,setShowModal2]= useState(false);
  const [showModal3,setShowModal3]= useState(false);

  const MyModal1 =()=>{
    return(
    <>
    <div className='bgcolor'></div>
    <div className='container'>
    <Hint1/>
    <button className='close'onClick={()=> setShowModal1(false)}>Close</button>
    </div>
    </>
    )
}
const MyModal2 =()=>{
  return(
  <>
  <div className='bgcolor'></div>
  <div className='container'>
  <Hint2/>
  <button className='close'onClick={()=> setShowModal2(false)}>Close</button>
  </div>
  </>
  )
}
const MyModal3 =()=>{
  return(
  <>
  <div className='bgcolor'></div>
  <div className='container'>
  <Answer/>
  <button className='close'onClick={()=> setShowModal3(false)}>Close</button>
  </div>
  </>
  )
}
  return (
    <>
         <div className="downbox">
                <div className="hint_box">
                  <button onClick={()=> setShowModal1(true)} className="hint">
                    <div className="hint_text">
                        Hint 1
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src="/lock_img.png" alt="lock"/>
                    </div>
                  </button>
                  { showModal1 && <MyModal1/>}
                  
                  <button onClick={()=> setShowModal2(true)} className="hint">
                    <div className="hint_text">
                        Hint 2
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src="/lock_img.png" alt="lock"/>
                    </div>
                  </button>
                  { showModal2 && <MyModal2/>}

                  <button onClick={()=> setShowModal3(true)} className="hint">
                    <div className="hint_text">
                        Answer
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src="/lock_img.png" alt="lock"/>
                    </div>
                  </button>
                  { showModal3 && <MyModal3/>}
                </div>
              </div>
    </>
  )
}

export default Dropdown