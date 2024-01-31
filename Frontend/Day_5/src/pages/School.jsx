import React, { useCallback, useEffect, useState } from 'react'
import '..//assets/css/School.css'
import video1 from '..//assets/videos/Couple.mp4';
import SimpleImageSlider from "react-simple-image-slider";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function School() {
    const images = [
        { url: "src/assets/images/img1.jpg"},
        { url: "src/assets/images/img4.jpg" },
        { url: "src/assets/images/img3.jpg" },
      ];

      const names = [
        'Coimbatore', 'Chennai', 'Kanchipuram','Vellore','KanyaKumari'
    ]
    const [newName, setnewName] = useState(0);
    const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 3000);
      return () => clearInterval(intervalID);
  }, [shuffle])
  return (
    <>
    <Navbar/>
    <div className="school">
        <h2>School & College Event <br/>Planner in  <span>{newName}.</span></h2>
    </div>
    <div className="schl_event">
        <h2>School & College Event planning with ease</h2>
        <p>At Pulse Entertainment, our team of expert professionals in event management turns your ideas into a reality. No matter what sort of BTL activity you are planning to organize, our professional services make the difference. We try our best to fulfill your smallest requirements and make your event and organization feel special.</p>
<p>We are the best school and college event planner in Coimbatore that will always take responsibility for your task on your behalf. Connect with us if you want your event to be successful and memorable.</p>
    </div>

    {/* <div className="des_video">
     <video autoplay  loop src={video1} />
    </div> */}
<div className="schl_list">
<h2>What We Will <span>Do for You</span></h2>
<div className="schl_location">
<table id="customers">
  <tr>
  <th><FaHome /> Work Location</th>
  </tr>
  <tr>
    <td>Coimbatore</td>
  </tr>
  <tr>
    <td>Kanchipuram</td>

  </tr>
  <tr>
    <td>Chennai</td>
    
  </tr>
  <tr>
    <td>Vellore</td>
   
  </tr>
  <tr>
    <td>KanyaKumari</td> 
  </tr>
  <tr>
    <td>Trichirappalli</td> 
  </tr>
  <tr>
    <td>Thanjavur</td> 
  </tr>
  <tr>
    <td>Ramanathapuram</td> 
  </tr>
  <tr>
    <td>Namakkal</td> 
  </tr>
  <tr>
    <td>Madurai</td> 
  </tr>
  <tr>
    <td>Krishnagiri</td> 
  </tr>
  </table>
</div>
<div className="schl_services">
<table id="customers">
  <tr>
  <th><FcServices /> Service Selection</th>
  </tr>
  <tr>
    <td>Mall Promotions</td>
  </tr>
  <tr>
    <td>School/ College Contact Programs</td>

  </tr>
  <tr>
    <td>Apartment Promotion</td>
    
  </tr>
  <tr>
    <td>In-Store Branding</td>
   
  </tr>
  <tr>
    <td>Manpower</td> 
  </tr>
  <tr>
    <td>Outdoor Publicity</td> 
  </tr>
  <tr>
    <td>Sampling & Testing Events</td> 
  </tr>
  <tr>
    <td>Road Show/LED Wall Road Show</td> 
  </tr>

  </table>
</div>
</div>
<br/><br/>
<Footer/>
    {/* <div className="slider">
    <SimpleImageSlider
        width={270}
        height={150}
        images={images}
        autoPlay={true}
        slideDuration={1}
      />
    </div> */}
    </>
  )
}
