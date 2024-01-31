import inter from '..//assets/images/inter1.jpg'
import '..//assets/css/Join.css'
import join from '..//assets/images/joinus2.jpg'
import join1 from '..//assets/images/joinus6.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Join() {
  return (
    <>
    <Navbar/>
    <div className="interview">
      <img src={inter} alt='interview'/>
      <h1>Make Your <span>Career</span> With Us</h1>
    </div>
    <br/>
    <div className="inter_cont">
        <h2>Glad You Chose Us</h2>
        <p>Pulse Event & Entertainment Pvt. Ltd. assisted and helped hundreds of students to grow their career in event managemneet and glamour industry. We are the best event management company in Coimbatore and other locations like Chennai, Kanchipuram, Vellore , KanyaKumari.</p>
        <p>Our mentors guide each and every person in the company to touch the apex of the life, our culture do not allow us to make a relation like bosses and employess, rather we work as team.</p>
        <p>So, Join our team right now, we would love to work with you.</p>
    </div>

   {/* ------------------------------- */}
    <div className="joinus">
        <img src={join} alt='joinus'/>
    </div>
   <div className="job_application">
    <form>
      <fieldset className="account">
        <label>
          Name
          <input type="text" name="username" placeholder="Enter Your Name" required/>
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Enter the Email" required/>
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="Enter Your Phone Number" required/>
        </label>
        <label>
          Field of Experience
          <input type="text" name="experience" placeholder="Experience" required/>
        </label>
        <label for="resume">Upload Your Resume</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required/>
      </fieldset>
      <fieldset class="account_action">
        <input class="btn " type="submit" name="submit" value="SUBMIT"/>
      </fieldset>
    </form>
  </div>
  <div className="join_back">
    <h3><span>Let</span> Us Grow Together..</h3>
    <p>Submit your resume in the email provided or fill the form above</p>
    <h2>hr@pluseevents.in</h2>
    
  </div>
<Footer/>
   {/* --------------------------------------- */}
    </>
  )
}
