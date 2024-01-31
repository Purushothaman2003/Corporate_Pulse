import '..//assets/css/Destination.css'
import video1 from '..//assets/videos/Couple.mp4';
import SimpleImageSlider from "react-simple-image-slider";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Destination() {
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
    <div className="destination">
        <h2>Best Destination Wedding <br/>Planner in <span>{newName}.</span></h2>
    </div>
    <div className="des_event">
        <h2>Make Your Destination Wedding Memorable</h2>
        <p>At, My Wedding Planning, Destination Wedding Planning is our strongest competence.</p>
<p>So if you are planning a destination wedding in India and another country, let us enhance your wedding experience with our expertise and flawless execution.</p>
<p>We offer a wide range of services from full-service design and execution to wedding day coordination, and can be as involved as you want us to be.</p>
<p>Our wedding planners are like your very own personal concierge and we often pay for ourselves in the money we save you by our knowledge of Destination wedding exclusive prices. We have intimate knowledge of how to plan Indian weddings in Thailand, Goa, Rajasthan, Dubai, Sri Lanka, and other popular destinations. Our team of wedding planners is experienced in planning destination weddings.</p>
<p>Along with expert production teams, we will ensure your special day has a 'wow-factor.</p>
    </div>

    {/* <div className="des_video">
     <video autoplay  loop src={video1} />
    </div>
<div className="wed_list">
<h2>ewufgiu</h2>
</div> */}
{/* ---------------------- */}
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
    <td>Contract Negotiation and Booking</td>
  </tr>
  <tr>
    <td>Event Timeline Management</td>

  </tr>
  <tr>
    <td>Room Allocation for Destination Weddings</td>
    
  </tr>
  <tr>
    <td>Duty Manager Co-ordination</td>
   
  </tr>
  <tr>
    <td>On-Day Co-ordination</td> 
  </tr>
  <tr>
    <td>Decor designing and execution</td> 
  </tr>
  <tr>
    <td>Pre-Wedding Functions Management</td> 
  </tr>

  </table>
</div>
</div>
<br/><br/><br/>

{/* -------------------------------- */}

    {/* <div className="slider">
    <SimpleImageSlider
        width={270}
        height={150}
        images={images}
        autoPlay={true}
        slideDuration={1}
      />
    </div> */}
    <Footer/>
    </>
  )
}
