import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_zdzn3mz','template_6hcn85t',form.current,'nlfC6kbaNeIOhPvdF')
    .then((result)=>{
        console.log(result.text);
    }, (error)=>{
        console.log(error.text);
    });
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Let's talk</h5>
      <h2>Contact</h2>


      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>anand.srikumar007@gmail.com</h5>
            <a href="mailto:anand.srikumar007@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Anand Sri</h5>
            <a href="https://m.me/anand.srikumar.56" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+919573223190</h5>
            <a href="https://api.whatsapp.com/send?phone=919573223190" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name="name" placeholder="your full name" required/>
          <input type="email" name="email" placeholder='your email' required/>
          <input type="text" name="subject" placeholder='Subject' required/>
          <textarea name="message" rows="7" placeholder='Your message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>


        </form>
      </div>
    </section>
  )
}
export default Contact
