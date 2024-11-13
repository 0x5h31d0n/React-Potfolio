import React, { useState, useEffect, useRef } from 'react';
import '../projects.css';
import varun1 from '../assets/varun1.png';
import varun2 from '../assets/varun2.png';
import varun3 from '../assets/varun3.png';
import docu1 from '../assets/docu1.png';
import docu2 from '../assets/docu2.png';
import docu3 from '../assets/docu3.png';
import docu4 from '../assets/docu4.png';
import cert from '../assets/certificate.png';
import prize from '../assets/prizerecv.jpg';

const projectDetails = [
  {
    title: 'VaruNetra - Maritime Situational Awareness System',
    description: 'VaruNetra is a cutting-edge Maritime Situational Awareness System developed for the Indian Navy Hackathon Swavlamban 2024. Built with React.js frontend and Flask backend, it leverages EasyOCR for vessel identification and Leaflet.js for interactive maritime mapping.',
    images: [varun1, varun2, varun3],
    technologies: [
      'React.js',
      'Flask',
      'EasyOCR',
      'Leaflet.js',
      'AI/ML',
      'Real-time Tracking',
      'Maritime Security',
      'OCR',
      'Geospatial Analysis'
    ],
    features: [
      'Real-time vessel tracking and monitoring',
      'Interactive visualization using Leaflet.js',
      'OCR-based vessel identification with EasyOCR',
      'Secure communication protocols',
      'Automated alert system',
      'RESTful API integration with Flask backend'
    ]
  },
  {
    title: 'DocuProcessing - Document Processing System',
    description: 'DocuProcessing is an automated document processing system developed at the NITK Hackathon. It automates form filling by extracting text from PDF and image files using EasyOCR and stores the extracted data in an SQLite3 database.',
    images: [docu1, docu2, docu3, docu4],
    technologies: [
      'React.js',
      'Flask',
      'EasyOCR',
      'SQLite3',
      'AI/ML',
      'OCR',
      'Automated Form Filling'
    ],
    features: [
      'Automated text extraction from PDFs and images',
      'Data storage in SQLite3 database',
      'User-friendly interface with React.js',
      'Backend processing with Flask',
      'Integration with EasyOCR for text recognition'
    ]
  },
  {
    title: 'Sleuth AI - AI OSINT Platform',
    description: 'Sleuth AI OSINT Platform is a web application that uses OSINT Industries with openAI API to gather and analyze open-source intelligence data. It provides real-time insights and analytics of victim email ids and phone number. This was developed at CIDECODE Hackathon 2024 held at PES University Bangalore.',
    images: [cert, prize],
    technologies: [
      'React.js',
      'OpenAI API',
      'pdfjs',
      'Osint Industries API',
    ],
    features: [
      'Real-time insights and analytics',
      'Victim email ids and phone number analysis',
      'Open-source intelligence data gathering',
      'Integration with OpenAI API',
    ]
  }
];

const ProjectCard = ({ title, description, images, technologies, features }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1700);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-card fade-item">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={title} className="project-image" />
      </div>
      <h3 className='project-title'>{title}</h3>
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <p className="description">{description}</p>
      <div className="features-list">
        <h4>Key Features:</h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="fade-section">
      <h2 className='top-name fade-item'>My Projects</h2>
      <div className="projects-container">
        {projectDetails.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;