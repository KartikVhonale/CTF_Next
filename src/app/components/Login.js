"use client"
import '../style/style_login.css'
import React, { Component ,useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/navigation'
import { usePointsContext } from '../context/PointsContext'

const Login = () => {
       const { points, setPoints, flags, setFlags,user,setUser, data, updateHints }= usePointsContext();
       const router = useRouter();
       const [username,setUsername] = useState("");
       const [password,setPassword] = useState("");
       const inputEvent =(event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
      };
       const inputEvent2=(event)=>{
        setPassword(event.target.value);
       };
       function handelClick(){
        setUser(username);
    updateHints({
      questionNumber:1,
      data: {
        ansCorrect: false,
          hint1:false,
          hint2:false,
          hint3:false
      }
    });
        if(password%2==0){
          router.push(`/questions/0`);
        }
        else{
          router.push(`/questions/0`);
        }
       }
  return (
    

    <>
    <Header/>
    <div className='login-box'>
      <div className='username'><label className='user' for="username" >Username :</label>
      <input className='username-input' placeholder='Enter here' type='text' name='username' onChange={inputEvent} />
      </div>
      <div className='password'><label className='user' for="username" >Password :</label>
      <input className='password-input' placeholder='Enter here' type='text' name='password' onChange={inputEvent2}  />
      </div>
      <input className='button' type='button' value='Login' name='Login' onClick={()=>{handelClick()}}/>
    </div>
    <Footer/>
    </>
  )
}

export default Login