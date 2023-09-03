import React, {useRef} from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsInstagram} from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r5lpjxr', 'template_8hyzgvp', form.current, 'S7T5DYUN1SHEJeHi0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>samdkk9852@gmail.com</h5>
            <a href="mailto:samdkk9852@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook Messenger</h4>
            <h5>Sambhav DK</h5>
            <a href="https://m.me/sambhav.dk" target='_blank'>Send a message</a>  

            {/* how to link facebook here  */}

          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@samdkk9852</h5>
            <a href="https://www.instagram.com/ssssam777/" target='_blank'>Send a message</a>
          </article>

          {/* <article className='contact__option'>
            <BsInstagram />
            <h4>Whatsapp</h4>
            <h5>Sambhav</h5>
            <a href="https://api.whatsapp.com/send?phone+91">Send a message</a>
          </article> */}

        </div>
        {/* End of Contact option  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="text" name="email" placeholder='Your email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
