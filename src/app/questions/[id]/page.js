"use client"
import '../../style/style_main.css';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';
import { questions_10 } from '../../../../data';
import Link from 'next/link';
import { useRouter } from "next/navigation"
import Probnav from '../../components/Probnav';
import { usePointsContext } from '../../context/PointsContext';
// import {DataContext} from "../../../context/data.context"

const page = ({params}) => {
  const route = useRouter();
  const{points, setPoints, flags, setFlags }=usePointsContext();    
  const question = questions_10.questions[params.id].question;
  const [flagInIt,setFlagInIt] = "";
  const next_id = parseInt(params.id) + 1;
//   const {flag, setFlag, points, setPoints} = useContext(DataContext);

  // context, redux, zustand
  function handleClick() {
      if(questions_10.questions[params.id].flag||true){
        console.log("button is clicked");
        route.push(`/questions/${next_id}`);
        console.log("correct flag is submitted");
        
    }
  }

  
  function handleChange(){
    if(flagInIt == questions_10.questions[params.id].flag){}
  }
  return (
    <>
         <div className="mainbox">
        <div className="left">
            <div className="extrabox">

                <div className="question_name_box">
                    <div className="question_name">
                    Question : {next_id}
                </div>
                <div className="question_difficulty">
                    {questions_10.questions[params.id].dif}
                </div>
            </div>
            <div className="Ctf_submmition">
                <div className="text_s" id='question' name='question'>
                {question}
                </div>
                <div className="link"><Link href="/questions/2">question files or link to use</Link></div>
                <form className="button_s" >
                    <div className="text_field">
                        <input type="text" className="field" id="flag_input" n" value={flagInIt} onChange={(e)=>{
                         setFlagInIt(e.target.value)
                        }}/>
                    </div>
                    <div className="sub_but">
                        <button className="submit_button" onClick={handleClick}>Submit</button>
                    </div>
                </form>
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
           <Dropdown hint1={questions_10.questions[params.id].hint1} hint2={questions_10.questions[params.id].hint2} hint3={questions_10.questions[params.id].hint3}/>
        </div>
    </div>
    <Probnav currentQ={[params.id]}/>
    </>
  )
}

export default page