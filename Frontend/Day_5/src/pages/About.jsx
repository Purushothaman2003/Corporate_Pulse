import '..//assets/css/About.css'
import Navbar from '../components/Navbar'
import contact from '..//assets/images/contact.jpeg'
import { MdWifiCalling3 } from "react-icons/md";
import Footer from '../components/Footer';


export default function About() {
  return (
   <>
   <Navbar/>
   <div className="gif_container">
    <h2>
    Pulse Events<span> &</span><br/>Entertainment pvt.Ltd.</h2>
    <p className="gif_p">A leading event management company in Coimbatore.</p>
   </div>
   <div className="about_us">
    <h1>About Us</h1>
    <p>
    At <strong>PULSE ENTERTAINMENT AND EVENTS</strong> is we create and orchestrate the most impactful experience possible for your audience/ guests. PULSE Entertainment and Event is one of the central Indias leading agencies in planning corporate events, private parties and luxury weddings.PULSE consistently exceeds clients expectations in the delivery of highly creative and impeccably executed events. Let us take the stress out of your event with our meticulous, innovative and personalised service.
    </p>
    
    <p>Its an <strong>ISO 9001:2008 Certified Company</strong>, as a professional event management company, we offer exhaustive services for managing all your event and entertainment requirements. Whether its a private or business function, a small gathering of friends or a gala for thousands, we will work with u to create a beautiful and unique experience.With a dedicated team of professionals and alliances with versatile artists, we will travel with you the extra mile to give your special occasions that very special glitter. We can arrange as many or as few services as you need, on time and within your budget.</p>

    <p>
    With our presence in Central India, we can help with expert advice on site location, logistics, creative decor, stage, sound, light, artists and guest hospitality. We also have alliances with excellent caterers to ensure your guests return with a memorable taste. With our creative and energetic Entertainers, we can sure liven up all your occasions and make them into beautiful memories. Need something different? No problem we will scour our many sources to find it. Our creative team can help you to visualize your special moments with clarity and execute them with perfection.
    </p>

    
    
    <h1>Why Pluse Events??</h1>
    <br/>
    <ul>
      <li>The members of our team posses a broad range of experience and expertise, so every phase of your project is monitored and implemented to ensure the highest quality result.</li>
      <li>Our creative and production team member are actively involved from the start of the project, enabling us to understand your goals and strategies to give you the best possible solution.</li>
      <li>We earn the loyalty of our clients by working hard to ensure those business objectives are met.</li>
      <li>Outstanding and long-lasting client relations.</li>
    </ul>
   </div>

   <div className="about">
   <img src={contact} alt="call_us"/>
    <h2><MdWifiCalling3 color={"green"} size={35}/> Contact Us Now :<h3> &nbsp; + 91 82201-32524</h3></h2>
    
   </div>
   <br/>
   <br/>
   <Footer/>
   </>
  )
}
