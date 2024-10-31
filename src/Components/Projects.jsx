import React, { useState, useEffect } from 'react';
import '../projects.css'; // Make sure to import the CSS file
import varun1 from '../assets/varun1.png';
import varun2 from '../assets/varun2.png'; // Add more images as needed
import varun3 from '../assets/varun3.png'; // Add more images as needed
import docu1 from '../assets/docu1.png';
import docu2 from '../assets/docu2.png'; // Add more images as needed
import docu3 from '../assets/docu3.png'; // Add more images as needed
import docu4 from '../assets/docu4.png'; // Add more images as needed

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
      'OCR-based Handwritten comm message identification with EasyOCR',
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
    <div className="project-card">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={title} className="project-image" />
      </div>
      <h3>{title}</h3>
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
  return (
    <section id="projects">
      <h2 className='top-name'>My Projects</h2>
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