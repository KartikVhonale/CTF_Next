"use client"
import '../style/style_login.css'
import React, { Component } from 'react'
const Login = () => {
  
  return (
    <>
    
    <form className='login-box'>
      <div className='username'><label className='user'for="username">Username :</label>
      <input className='username-input' placeholder='Enter here' type='text' name='username' ></input>
      </div>
      <div className='password'><label className='user'for="username">Password :</label>
      <input className='password-input' placeholder='Enter here' type='text' name='password' ></input>
      </div>
      <input className='button' type='button' value='Login'name='Login'></input>
    </form>
    
    </>
  )
}

export default Login