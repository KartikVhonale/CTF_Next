"use client"
import Image from 'next/image'
import '@/app/style/style_main.css';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

const page = () => {

  return (
    <>
         <div className="mainbox">
        <div className="left">
            <div className="extrabox">

                <div className="question_name_box">
                    <div className="question_name">
                    Question : 1
                </div>
                <div className="question_difficulty">
                    Hard
                </div>
            </div>
            <div className="Ctf_submmition">
                <div className="text_s" id='question' name='question'>
                {/* {question} */}
                </div>
                <div class="link"><a href="">question files or link to use</a></div>
                <div className="button_s">
                    <div className="text_field">
                        <input type="text" className="field"/>
                    </div>
                    <div className="sub_but">
                        <input type="button" value="Submit" className="submit_button"/>
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
           <Dropdown/>
        </div>
    </div>
    </>
  )
}

export default page