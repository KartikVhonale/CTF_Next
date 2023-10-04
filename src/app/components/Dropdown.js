"use client"
import React,{useState} from 'react'
import '@/app/style/style_main.css';
import '@/app/style/style_modal.css';
import Hint1 from './Hint1';
import Hint2 from './Hint2';
import Answer from './Answer';

const Dropdown = (props) => {

  const [imageSrc1, setImageSrc1] = useState('/lock_img.png');
  const [imageSrc2, setImageSrc2] = useState('/lock_img.png');
  const [imageSrc3, setImageSrc3] = useState('/lock_img.png');
  const [showModal1,setShowModal1]= useState(false);
  const [showModal2,setShowModal2]= useState(false);
  const [showModal3,setShowModal3]= useState(false);

  function handelClick1(){
    console.log("get up");
    setImageSrc1('/unlock.png');
  }
  function handelClick2(){
    console.log("get up");
    if(imageSrc1=='/unlock.png'){
    setImageSrc2('/unlock.png');
    setShowModal2(true); 
    }
  }
  function handelClick3(){
    console.log("get up");
    if(imageSrc2=='/unlock.png'){
      setImageSrc3('/unlock.png');
      setShowModal3(true); 
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
                        <img className="img_lock" src={imageSrc1} alt="lock"/>
                    </div>
                  </button>
                  { showModal1 && <MyModal1/>}
                  
                  <button onClick={()=>{handelClick2();}} className="hint">
                    <div className="hint_text">
                        Hint 2
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src={imageSrc2} alt="lock"/>
                    </div>
                  </button>
                  { showModal2 && <MyModal2/>}

                  <button onClick={()=> {handelClick3();}} className="hint">
                    <div className="hint_text">
                        Answer
                    </div>
                    <div className="hint_lock">
                        <img className="img_lock" src={imageSrc3} alt="lock"/>
                    </div>
                  </button>
                  { showModal3 && <MyModal3/>}
                </div>
              </div>
    </>
  )
}

export default Dropdown