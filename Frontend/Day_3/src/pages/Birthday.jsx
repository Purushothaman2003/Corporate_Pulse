import React, { useCallback, useEffect, useState } from 'react'
import '..//assets/css/Birthday.css'
import video1 from '..//assets/videos/Couple.mp4';
import SimpleImageSlider from "react-simple-image-slider";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Birthday() {
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
    <div className="birthday">
        <h2>Best Birthdays and Aniversaries<br/>Planner in <span>{newName}.</span></h2>
    </div>
    <div className="birth_event">
        <h2>Let us plan your Birthdays and Anniversaries</h2>
        <p>Birthdays are always special moments. Sometimes it’s a close affair with just a handful of friends and sometimes it’s a huge gathering. Whatever be the size of gathering, we offer excellent services for managing it. We do offer Service Selection</p>

<p><b>Customized Birthday and Anniversary for Baby Shower, 1st Birthday,1st Anniversary,25th Anniversary, 40th & 50th Anniversary.</b></p>
    </div>

    
{/* --------------------- */}

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
    <td>Venue Selection</td>
  </tr>
  <tr>
    <td>Invitation Cards Designing</td>

  </tr>
  <tr>
    <td>Theme Decoration</td>
    
  </tr>
  <tr>
    <td>DJ ,Sound & Lights</td>
   
  </tr>
  <tr>
    <td>Entertainment & Artist</td> 
  </tr>
  <tr>
    <td>Party Decoration</td> 
  </tr>
  <tr>
    <td>AV Equipments & Designing</td> 
  </tr>

  </table>
</div>
</div>






{/* --------------------- */}
    {/* <div className="slider">
    <SimpleImageSlider
        width={270}
        height={150}
        images={images}
        autoPlay={true}
        slideDuration={1}
      />
    </div> */}
    <br/><br/><br/>
    <Footer/>
    </>
  )
}
