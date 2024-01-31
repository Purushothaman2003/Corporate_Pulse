import React from 'react'
import '..//assets/css/Contact.css'
import logo from '..//assets/images/contact1.jpg'
import { PiArrowArcRightBold } from "react-icons/pi";
import { ImLocation2 } from "react-icons/im";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className="cont">
      <h2>Contact Us</h2>
      <p>We people at Pulse event & Entertainment Pvt. Ltd. would be glad to connect with you. We are the pioneer and best event management company in Coimbatore and other locations nearby like Chennai, Kanchipuram, Vellore , KanyaKumari.</p>

<p>So, what are you wating for? Connect with us and take the advantage of all our enthralling services. You will not regret it, rather you will end up praising us.</p>
    </div>

    <div className="contact_form">
    <img src={logo} alt='logo'/>
    <form>
  <fieldset class="account-info">
    <label>
      Name
      <input type="text" name="username" placeholder='Enter Your Name'/>
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder='Enter the Email'/>
    </label>
    <label>
      phone Number
      <input type="text" name="number" placeholder='Enter Your Mobile Number'/>
    </label>
    <label>
      Query
      <input type="text" name="query" placeholder='Any Query'/>
    </label>
  </fieldset>
  <fieldset className="account-action">
    <input className="contact_button" type="submit" name="submit" value="SEND"/>
  </fieldset>
</form>

<div className="google_map">
  <h2 className="h2_map"><ImLocation2 color={"red"} size={35}/> Office Location</h2>
  <br/>
<iframe width="40%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=25,%20Mullai%20Nagar,%20Coimbatore,%20Kuniyamuthur,%20Tamil%20Nadu%20641039+(IBAM%20EVENTS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
</div>




    </div>
    <br/><br/>
    <Footer/>
    </>
  )
}
