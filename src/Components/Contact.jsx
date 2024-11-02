import React from 'react';
import Lottie from 'lottie-react';
import { Mail, Phone,Github,Linkedin } from 'lucide-react';
import contact from '../assets/contact.json';
import '../style.css';

const contactDetails = {
  email: 'samymenezes33@gmail.com',
  phno: '+91 8618387647',
  github: '0x5h31d0n',
  linkedin: 'sheldonangelomenezes',
};

function Contact() {
  return (
    <section id="contact">
      <div className='contact-block'>
        <h2 className='top'>Contact Me</h2>
        <Lottie animationData={contact} loop={true} className="contact-animation" />
        <div className="contact-grid">
          <a href={`https://linkedin.com/in/${contactDetails.linkedin}/`} className='contact-item'>
            <div className="contact-content">
              <Linkedin size={24} />
              <h3>Linkedin</h3>
              <span className='contact-detail'>{contactDetails.linkedin}</span>
            </div>
          </a>
          <a href={`https://github.com/${contactDetails.github}`} className='contact-item'>
            <div className="contact-content">
              <Github size={24} />
              <h3>Github</h3>
              <span className='contact-detail'>{contactDetails.github}</span>
            </div>
          </a>
          <a href={`mailto:${contactDetails.email}`} className='contact-item'>
            <div className="contact-content">
              <Mail size={24} />
              <h3>Email</h3>
              <span className='contact-detail'>{contactDetails.email}</span>
            </div>
          </a>
          <a href={`tel:${contactDetails.phno}`} className='contact-item'>
            <div className="contact-content">
              <Phone size={24} />
              <h3>Phone</h3>
              <span className='contact-detail'>{contactDetails.phno}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;