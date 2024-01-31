import React from 'react'
import logo from'..//assets/images/logo.png'
import '..//assets/css/Nav.css';
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
    <div className="nav_link">
      <a href="/home"><img src={logo} alt="logo"/></a>
      <a href="/home">HOME</a>
      <a href="/about">ABOUT</a>
      <div className="drop_down">

    <button className="drop_btn">OUR SERVICES<FaCaretDown />
    </button>
    <div className="drop_down_content">
      <a href="/des">Destination Wedding</a>
      <a href="/wed">Wedding Planner</a>
      <a href="/corporate">Corporate Event</a>
      <a href="/birthday">Birthdays & Anniversaries</a>
      <a href="/school">School And College Events</a>
      
    </div>
    </div> 
      
      <a href="/contact">CONTACT US</a>
      {/* <a href="/test">TESTIMONALS</a> */}
      <a href="/join">JOIN US</a>
      <a href="/privacy">PRIVACY POLICY</a>
      <a href="/profile">PROFILE</a>
    </div>
    </>
  )
}
