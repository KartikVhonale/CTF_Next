import Image from 'next/image'
import React from 'react'
import '@/app/style/style_main.css';
import '@/app/style/style_clock.css';
import Clock from './Clock'
const Header = () => {
  return (
    <>
       <div className="header">
            <div className="img_logo">
                <img src='/logo.png' className="logo"/>
            </div>
            <div className="time">
                {/* <Clock /> */}
            </div>
       </div>
    </>
  )
}

export default Header