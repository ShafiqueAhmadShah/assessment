import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Profile from '../components/Profile';

function Contact() {
    return (
      <>
        <Profile/>
      <section className='cont-section'>
      
      <div className="contact-sect">
   
        <div className="contact-main">
        <div className="contact-left">
            <div className="contact-text">
                <h1>Contact Us</h1>
                <p className='getintouch'>GET IN TOUCH ANYTIME!</p>
                <p>If you have any query regarding visa consultancy, air ticketing, 
                    travel and tour packages or you want to perform a Hajj or Umrah.
                     feel free to contact us at any time.</p>
            </div>
            <div className="contact-icon">
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>Email US</h5>
                        <p>info@travelhope.com.pk</p>
                    </div>
                </div>
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>PHONE NO</h5>
                        <p>+923123232334234</p>
                    </div>
                </div>
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>SKYPE</h5>
                        <p>info@travelhope.com.pk</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="contact-right">
                <form action="#" className='contact-form'>
                    <input type="text" name='name' placeholder='Name'  className='contact-input'/>
                    <input type="e-mail" name='emai' placeholder='Email Address' className='contact-input'/>
                    <input type="phone" name='phone' placeholder='Phone Number' className='contact-input'/>
                    <textarea name="textarea" id="textarea" cols="55" rows="10" placeholder='Message'></textarea>
                    <button className='contact-btn'>SUBMIT</button>
                </form>
            </div>
            
        </div>

       
        <div className="contact-address">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703.49956731228!2d74.37755185!3d31.359003099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a843a3704c91%3A0xa1af60f850769!2sImmad%20Garden%20Housing%20Scheme%2C%20Kahna%20Purana%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1670377026739!5m2!1sen!2s" width="100%" height="100%" ></iframe>
          
        </div>
      </div>
      </section>
      </>
    );
  }
  
  export default Contact;