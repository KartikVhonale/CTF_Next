"use client"
import '../../style/style_main.css';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';
import { questions_10 } from '../../../../data';
import Link from 'next/link';
import { useRouter } from "next/navigation"
import Probnav from '../../components/Probnav';
import { usePointsContext } from '../../context/PointsContext';
import {addDocumentToCollection} from "../../../../utils/firebase"
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const page = ({params}) => {
  const route = useRouter();
  const{points, setPoints, flags, setFlags, saveCookies }=usePointsContext();    
  const question = questions_10.questions[params.id].question;
  const [flagInIt,setFlagInIt] = "";
  const next_id = parseInt(params.id) + 1;
  const id1 = parseInt(params.id);
  const strFlag= questions_10.questions[params.id].flag;

  // context, redux, zustand
  // easy question 10 points   hint1: -2 hint2: -3 hint3: -4
  // medium question 20 points hint1: -4 hint2: -6 hint3: -8
  // hard question 30 points hint1: -6 hint2: -9 hint3: -12
  
  const [name, setName]=useState("")
  const inputEvent =(event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  function handleClick(event) {
    event.preventDefault();
    if(name === strFlag){
        route.push(`/questions/${next_id}`);
        console.log("correct flag is submitted");
        addDocumentToCollection("CTFStore", "Adnan", {
            flags: flags + 1,
            score: points + 3,
            timeSubmission: (new Date()).toISOString()
        })
        setFlags(flags => flags + 1);
        setPoints(points => points + 3);
    }
    else 
    {alert("Wrong answer");}
  }

  return (
    <>
        <Header/>
         <div className="mainbox">
          <div className="left">
            <div className="extrabox">

                <div className="question_name_box">
                    <div className="question_name">
                    Question : {id1+1}
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
                <div className="button_s" >
                    <div className="text_field">
                        <input type="text" className="field" id="flag_input" value={flagInIt}  onChange={inputEvent}
                        />
                    </div>
                    <div className="sub_but">
                        <button className="submit_button" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="right">
            <div className="grades">
                <div className="points">
                    Points : {points}
                </div>
                <div className="flag">
                    Flags : {flags}
                </div>

            </div>
           <Dropdown questionId={params.id} hint1={questions_10.questions[params.id].hint1} hint2={questions_10.questions[params.id].hint2} hint3={questions_10.questions[params.id].hint3}/>
        </div>
    </div>
    <Probnav currentQ={[params.id]}/>
    <Footer/>
    </>
  )
}

export default page