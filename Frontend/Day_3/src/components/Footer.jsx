import React from 'react'
import '..//assets/css/Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div class="footer">
        <div class="heading">
         
        </div>
            <hr/>
        <div class="content">
          <div class="services">
            <h4>Using the portal</h4>
            <p><a href="#">Website Policies</a></p>
            <p><a href="#">Accessilbility Statement</a></p>
            <p><a href="#">Site Map</a></p>
            <p><a href="#">Browser Support</a></p>
          </div>
          <div class="social-media">
            <h4>Follow as on</h4>
            <p>
              <a href="#"
              ><i class="fab fa-linkedin"></i> <FaLinkedin size={20} /> Linkedin</a>
            </p>
            <p>
              <a href="#"
              ><i class="fab fa-twitter"></i><FaXTwitter size={20}/> Twitter</a
              >
            </p>
            <p>
              <a href="https://github.com/Purushothaman2003"
              ><i class="fab fa-github"></i><FaGithub size={20}/> Github</a
              >
            </p>
            
            <p>
              <a href="https://www.facebook.com/codewithfaraz"
              ><i class="fab fa-facebook"></i> <FaFacebook size={20} /> Facebook</a
              >
            </p>
            <p>
              <a href="https://instagram.com/the_mass____?igshid=NGExMmI2YTkyZg=="
              ><i class="fab fa-instagram"></i> <FaInstagram size={20}/> Instagram</a
              >
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href="/home">Home</a></p>
            <p><a href="/about">About</a></p>
            <p><a href="/join">Join Us</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              Address: 67-A, Race Course Rd, Race Course, <br />
              &nbsp; &nbsp; Gopalapuram, Coimbatore, Tamil Nadu 641018
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-822013****</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="taxdemand@cpc.incometax.gov.in">taxdemand@cpc.incometax.gov.in</a></p>
          </div>
        </div>
        <footer >
          <hr />
          ©2022. Pulse Entertainment & Event. All Rights Reserved.All Rights Reserved..<br />This site is best viewed in 1024 * 768 resolution with latest version of Chrome, Firefox, Safari and Internet Explorer.
        </footer>
      </div>
    </>
  )
}
