import React, { useCallback, useEffect, useState } from 'react'
import '..//assets/css/Wedding.css'
import video1 from '..//assets/videos/Couple.mp4';
import SimpleImageSlider from "react-simple-image-slider";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Wedding() {
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
    <div className="wedding">
        <h2>Best  Wedding Planner <br/>in <span>{newName}.</span></h2>
    </div>
    <div className="wed_content">
        <h2>Let Us Plan Your Wedding</h2>
        <p>Being a pioneer in the area of wedding planning and management, Pulse can have of a large and high profile market share which is growing bigger and colorful with the ticking off the clock. Our 11 years of experience makes it one of the best wedding planner in Coimbatore.</p>
<p>Also, Pulse events management company goes a long way in understanding and fulfilling the client’s requirement with a special touch, we treat a wedding project as a close and delicate affair and detailing is given due attention, Our wedding are an unsurpassed complication of the best option in all areas.</p>
<p>Wedding Rose – A Wedding Planner is the team of highly professional peoples of IHM Background who have worked with some of the top Hotels like the Oberoi, Hyatt, Best Western Surya, Taj Group, Welcome Group & Imperial.</p>
    </div>

    {/* <div className="des_video">
     <video autoplay controls loop src={video1} />
    </div> */}

    {/* ---------------------------- */}
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
    <td>Creative Wedding Cards</td>

  </tr>
  <tr>
    <td>Wedding Theme Decorations</td>
    
  </tr>
  <tr>
    <td>Baarat Band/ Ghodi</td>
   
  </tr>
  <tr>
    <td>Live Entertainment</td> 
  </tr>
  <tr>
    <td>Artist Management</td> 
  </tr>
  <tr>
    <td>Pre-Wedding Theme Party</td> 
  </tr>
  <tr>
    <td>Ladies Sangeet</td> 
  </tr>
  <tr>
    <td>Fireworks</td> 
  </tr>
  <tr>
    <td>Hospitality Management</td> 
  </tr>
  <tr>
    <td>Videography & Photography</td> 
  </tr>
  <tr>
    <td>Varmala Themes</td> 
  </tr>
  <tr>
    <td>Catering/ bufacte</td> 
  </tr>

  </table>
</div>
</div>
<Footer/>

    {/* -------------------------------------- */}



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
