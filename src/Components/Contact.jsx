import React from 'react';
import Lottie from 'lottie-react';
import contact from '../assets/contact.json';
import '../style.css';

function Contact() {
  return (
    <section id="contact">
      <div className='contact-block'>
      <h2 className='top'>Contact Me</h2>
      <Lottie animationData={contact} loop={true} className="contact-animation" />
      </div>
    </section>
  );
}

export default Contact;
