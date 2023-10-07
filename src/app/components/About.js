"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import '../style/style_about.css'

const About = () => {
    const route = useRouter();
    function handleClick(){
        route.push(`/signin`);
    }
  return (
    <>
        <div className="main">

        <div className="layer">
           <div className="header">
                <img src='/RCOEM-logo.svg' className="img1"/>
                <img src="/aarhant_logo.svg" className="img2"/>
                <img src="/microscan_logo.svg" className="img3"/>
            </div> 
        </div>
        
        <div className="ctf_header">
            <h1>Catch The Flag</h1>
            <div className="evereg">
                <button className="ctf_header_button2" onClick={handleClick}>Login</button>
            </div>
        </div>

        <div className="page_start">
            <div className="blank_part"></div>
        </div>

        <div className="event_info">
            <h1>Event Info</h1>
            <p>A CTF event is a competition that takes major disciplines of information security and makes them into
                smaller, objectively measurable exercises. Participants attempt to solve challenges by solving,
                exploiting, breaking, or other cybersecurity tradecraft. There are two major types of CTFs: jeopardy and
                attack defend.
                </p>
        </div>
            <div className="rules">
                <h1 className="span">Rules of CTF</h1>
                <div className="group">
                <p>There are no limitations on the resources or tools that Participants can use</p>
                <p>Sharing keys or hints or flags with other teams is cheating,</p>
                <p>We encourage Participants to solve problems in novel and creative ways using all available resources, but we do require that Participants solve the problems themselves.</p>
                <p>At any time, in the sole and absolute discretion of volunteers, volunteers shall be entitled to disqualify a Participant and/or Team in the event of a failure to meet relevant eligibility criteria or any other violation or suspected violation of these Competition Rules</p>
                </div>
            </div>
    
            <div className="sponsor">
                <span className="span"><h1>Our Sponsor</h1></span>
                <div className="group">
                    <h2>Microscan Communications Consult, Transform, Manage operations and provide a host of other services which can help support your journey of Digital Transformation</h2>
                </div>
                <br/><br/>
                <div align="centre" className="span2" >
                <img src="/microscan_logo.svg" alt="CompanyLogo" className="clogo"/><div className="span2text">Microscan<br/>Communications</div></div>
                
            </div>  
        </div>
    
    </>
  )
}

export default About