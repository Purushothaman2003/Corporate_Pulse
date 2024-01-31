import React, { useCallback, useEffect, useState } from 'react'
import '..//assets/css/Corporate.css'
import video1 from '..//assets/videos/Couple.mp4';
import SimpleImageSlider from "react-simple-image-slider";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Corporate() {
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
    <div className="corporate">
        <h2>Best Corporate Events <br/>Planner in <span>{newName}.</span></h2>
    </div>
    <div className="cop_event">
        <h2>Outstanding Corporate Event Planner</h2>
        <p>Corporate event planning is among our most utilized services. Corporate event is crafted to your custom needs by our innovative and experienced staff.</p>
<p>Our staff has combined decades of experience in planning and coordinating the entire gamut of event expressions. Choosing an event consultant is the most important decision you’ll make in transforming your idea into an event or production that is memorable, astonishing and profitable.</p>
<p>Your corporate event planning may need national or local talent. We work closely with you to acquire the best act or speaker for your event. Corporate entertainment is important to the success and reputation of your company, and we know how to create an event and entertainment package that is perfect for you as we are known for best corporate event planner in Gwalior.</p>
    </div>

   {/* -------------------------- */}
   <div className="schl_list">
<h2>What We Will <span>Do for You</span></h2>
<br/>
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
    <td>Product Launch & Re-launch</td>
  </tr>
  <tr>
    <td>Retailer/Dealer/Distributore Meets</td>

  </tr>
  <tr>
    <td>Conference /Seminars</td>
    
  </tr>
  <tr>
    <td>Award Function</td>
   
  </tr>
  <tr>
    <td>Celebrity Show/Live Concert/Cu;tural Events</td> 
  </tr>
  <tr>
    <td>Corporate Theme Party</td> 
  </tr>
  <tr>
    <td>Showroom Decoration(Customized)</td> 
  </tr>

  </table>
</div>
</div>


<br/><br/><br/>


<Footer/>
   {/* ------------------------------- */}
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
