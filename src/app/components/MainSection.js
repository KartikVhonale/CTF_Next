import Image from 'next/image'
import React from 'react'
import '@/app/style/style_main.css';
import Dropdown from './Dropdown';

const MainSection = () => {
  return (
    <>
         <div className="mainbox">
        <div className="left">
            <div className="extrabox">

                <div className="question_name_box">
                    <div className="question_name">
                    Question
                </div>
                <div className="question_difficulty">
                    Hard
                </div>
            </div>
            <div className="Ctf_submmition">
                <div className="text_s">
                    A CTF event is a competition that takes major disciplines of information security and fdsjflkjsadkljfkjasdkljflklhadih  
                </div>
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
                    Points : 10
                </div>
                <div className="flag">
                    Flags : 3
                </div>

            </div>
           <Dropdown/>
        </div>
    </div>
    </>
  )
}

export default MainSection