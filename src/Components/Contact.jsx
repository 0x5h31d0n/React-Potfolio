import React from 'react';
import Lottie from 'lottie-react';
import { Mail, Phone } from 'lucide-react';
import contact from '../assets/contact.json';
import '../style.css';

const contactDetails = {
  email: 'samymenezes33@gmail.com',
  phno: '+91 8618387647'
};

function Contact() {
  return (
    <section id="contact">
      <div className='contact-block'>
        <h2 className='top'>Contact Me</h2>
        <Lottie animationData={contact} loop={true} className="contact-animation" />
        <h3><Mail size={20} /> Email</h3>
        <a href={`mailto:${contactDetails.email}`} className='contact-names'>
           {contactDetails.email}
        </a>
        <h3><Phone size={20} /> Phone</h3>
        <a href={`tel:${contactDetails.phno}`} className='contact-names'>
          {contactDetails.phno}
        </a>
      </div>
    </section>
  );
}

export default Contact;