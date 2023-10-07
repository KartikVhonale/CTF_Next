"use client"
import React,{useState} from 'react'
import '../style/style_main.css';
import '../style/style_modal.css';
import Hint1 from './Hint1';
import Hint2 from './Hint2';
import Answer from './Answer';
import {usePointsContext} from '../context/PointsContext';
import { questions_10 } from '../../../data';

const Dropdown = (props) => {
  const { points, setPoints, flags, setFlags,user,setUser,
     data, updateHints }= usePointsContext();
  const [showModal1,setShowModal1]= useState(false);
  const [showModal2,setShowModal2]= useState(false);
  const [showModal3,setShowModal3]= useState(false);
  const useId = props.questionId;
  if(!data[parseInt(useId)+1]){
    updateHints({
      questionNumber:parseInt(useId)+1,
      data: {
        ansCorrect: false,
          hint1:false,
          hint2:false,
          hint3:false
      }
    });
  }

  function handelClick1(){
    console.log(user);
    setShowModal1(true);
    updateHints({
        questionNumber:parseInt(useId)+1,
        data: {
          ansCorrect: false,
            hint1:true,
            hint2:false,
            hint3:false
        }
      });
  }
  
  function handelClick2(){
    console.log(user);
    if(!isLocked(1)){
    setShowModal2(true); 
    updateHints({
      questionNumber:parseInt(useId)+1,
      data: {
        ansCorrect: false,
          hint1:true,
          hint2:true,
          hint3:false
      }
    });
    }
  }
  function isLocked(no) {
    if (data[parseInt(useId)+1]&&data[parseInt(useId)+1][`hint${no}`]==true) {
      return false;
    }
    return true;
  }
  function getImgUrl(no) {
    return isLocked(no)? "/lock_img.png": "/unlock.png";
  }
  function handelClick3(){
    console.log("get up");
    if(!isLocked(2)){
      setShowModal3(true);
      updateHints({
        questionNumber:parseInt(useId)+1,
        data: {
          ansCorrect: false,
            hint1:true,
            hint2:true,
            hint3:true
        }
      }); 
      } 
  }
  const MyModal1 =()=>{
    return(
    <>
    <div className='bgcolor'></div>
    <div className='container'>
    <Hint1 hint_text={props.hint1}/>
    <button className='close'
    onClick={()=> setShowModal1(false)}>Close</button>
    </div>
    </>
    )
}
const MyModal2 =()=>{
  return(
  <>
  <div className='bgcolor'></div>
  <div className='container'>
  <Hint2 hint_text={props.hint2}/>
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
  <Answer hint_text={props.hint3}/>
  <button className='close'onClick={()=> setShowModal3(false)}>Close</button>
  </div>
  </>
  )
}
  return (
    <>
         <div className="downbox">
                <div className="hint_box">
                  <button onClick={()=> {setShowModal1(true); handelClick1();}}  className="hint">
                    <div className="hint_text">
                        Hint 1
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src={getImgUrl(1)} alt="lock"/>
                    </div>
                  </button>
                  { showModal1 && <MyModal1/>}
                  
                  <button onClick={()=>{handelClick2();}} className="hint">
                    <div className="hint_text">
                        Hint 2
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src={getImgUrl(2)} alt="lock"/>
                    </div>
                  </button>
                  { showModal2 && <MyModal2/>}

                  <button onClick={()=> {handelClick3();}} className="hint">
                    <div className="hint_text">
                        Answer
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src={getImgUrl(3)} alt="lock"/>
                    </div>
                  </button>
                  { showModal3 && <MyModal3/>}
                </div>
              </div>
    </>
  )
}

export default Dropdown