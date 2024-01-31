import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from '../components/Navbar';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import '..//assets/css/Home.css'
import collage from '..//assets/images/collage4.png'
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import Footer from '../components/Footer';
import wed1 from '..//assets/images/wed1.jpg'
import wed2 from '..//assets/images/wed2.jpg'
import wed3 from '..//assets/images/wed3.jpg'
import wed4 from '..//assets/images/wed4.jpeg'
import wed5 from '..//assets/images/wed5.jpg'
import wed6 from '..//assets/images/img1.jpg'
// import wed6 from '..//assets/images/wed6.jpg'


export default function Home() {
  const [counteron, setcounter] = useState(false)

  const images = [
    { url: "src/assets/images/img1.jpg",caption:"Pre Wedding Shoot" },
    { url: "src/assets/images/img4.jpg" },
    { url: "src/assets/images/img3.jpg" },
  ];
  return (
    <>
    <Navbar/>
    <div className="image_slider">
    <SimpleImageSlider
        width={1519}
        height={670}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.5}
      />
    </div>
    <br/><br/>
    {/* -------------------------------------------- */}
    <div className="container1">
    <div className="middle"> 
    <img src={collage} alt="photos"/>
    </div>
    <div className="mission">
      <h1><TbTargetArrow /> MISSION </h1>
    <p>"At [Your Company Name], our mission is to redefine the corporate events landscape by delivering unparalleled and unforgettable experiences that inspire, connect, and leave a lasting impact. We strive to be the trusted partner for our clients, offering innovative event solutions that go beyond expectations, fostering collaboration, and contributing to the success and growth of their businesses. Through meticulous planning, creativity, and attention to detail, we aim to transform ordinary events into extraordinary moments that leave a lasting impression on participants and elevate the standard of corporate gatherings."</p>

    </div>
    <br/>
    <div className="vision">
      <h1><FaRegEye/> VISION</h1>
    <p>
"Empowering corporate success through exceptional event experiences, [Your Company Name] envisions a future where every corporate event is a catalyst for growth, engagement, and meaningful connections. We aspire to be the industry leader, setting new benchmarks for creativity, innovation, and professionalism. Our vision is to create a dynamic and inclusive platform that seamlessly integrates technology, sustainability, and cultural diversity into every event, ensuring that each gathering becomes a strategic asset for our clients. "</p>

    </div>
    </div>

    {/* ---------------------------------------------- */}
<div className="flex-container">

<div className="bo1">
  <img src={wed1} alt="photos"/>
</div>
<div className="bo2">
  <img src={wed2} alt="photos"/>
</div>
<div className="bo3">
  <img src={wed3} alt="photos"/>
</div>
<br/>
{/* <div className="bo4">
  <img src={wed4} alt="photos"/>
</div>
<div className="bo5">
  <img src={wed5} alt="photos"/>
</div>
 <div className="bo6">
  <img src={wed6} alt="photos"/>
</div>  */}


</div>



















    {/* ------------------------------------------------------- */}
    <br/>
     <div className="rows">
        <div className="scroll">
        <ScrollTrigger onEnter={() => setcounter(true)} onExit={() => setcounter(false)}>
            <h1>{counteron && <CountUp start={0} end={3240} duration={1} delay={0} />}
              +&nbsp; <br/><h3> Wedding Planned</h3>
            </h1>
          </ScrollTrigger>
        </div>
        <div className="scroll">
        <ScrollTrigger onEnter={() => setcounter(true)} onExit={() => setcounter(false)}>
            <h1>{counteron && <CountUp start={0} end={80} duration={1} delay={0} />}
              &nbsp;+ <br /><h3>Venue Affiliated</h3>
            </h1>
          </ScrollTrigger>
        </div>
        <div className="scroll">
        <ScrollTrigger onEnter={() => setcounter(true)} onExit={() => setcounter(false)}>
            <h1>{counteron && <CountUp start={0} end={1450} duration={1} delay={0} />}
            &nbsp;+ <br /><h3>Outdoor Weeding</h3>
            </h1>
          </ScrollTrigger>
        </div>
        <div className="scroll">
        <ScrollTrigger onEnter={() => setcounter(true)} onExit={() => setcounter(false)}>
            <h1>{counteron && <CountUp start={0} end={25} duration={1} delay={0} />}
              <h3>Years of Experience</h3>
            </h1>
          </ScrollTrigger>
        </div>
      </div> 

      {/* --------------------------------------------------- */}
    <div className="footer">
      <Footer/>
    </div>


    </>
  )
}


