"use client"
import Image from 'next/image'
import '@/app/style/style_main.css';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

const page = ({params}) => {
  const [activeQuestion,setActiveQuestion]= useState(0);
  function handelClick() {
    console.log("button is clicked");
    
  }
  return (
    <>
         <div className="mainbox">
        <div className="left">
            <div className="extrabox">

                <div className="question_name_box">
                    <div className="question_name">
                    Question : {params.id}
                </div>
                <div className="question_difficulty">
                    Hard
                </div>
            </div>
            <div className="Ctf_submmition">
                <div className="text_s" id='question' name='question'>
                {/* {question} */}
                </div>
                <div className="link"><a href="">question files or link to use</a></div>
                <div className="button_s">
                    <div className="text_field">
                        <input type="text" className="field"/>
                    </div>
                    <div className="sub_but">
                        <button className="submit_button" onClick={handelClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="right">
            <div className="grades">
                <div className="points">
                    Points : 0
                </div>
                <div className="flag">
                    Flags : 0
                </div>

            </div>
           <Dropdown hint1="hint1" hint2="hint2" hint3="hint3"/>
        </div>
    </div>
    </>
  )
}

export default page