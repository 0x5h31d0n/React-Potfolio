// Separate EducationCard component with memo
import React, { memo, useEffect, useRef } from 'react'
import '../style.css'

const educationDetails = [
  {
    id: 1, // Added unique IDs
    degree: 'Bachelor of Engineering',
    stream: 'Computer Science',
    duration: '2022 - 2026',
    college: 'St. Joseph Engg College'
  },
  {
    id: 2,
    degree: 'Pre-University College',
    stream: 'PCMC',
    duration: '2020 - 2022',
    college: 'St. Aloysius PU College'
  },
  {
    id: 3,
    degree: 'High School',
    stream: 'General',
    duration: '2017 - 2020',
    college: 'St. Aloysius High School'
  }
];

const EducationCard = memo(({ edu }) => (
  <div className='edu fade-item'>
    <h3 className='degree'>{edu.degree}</h3>
    <div className="lower-education">
      <h4 className="edu-stream">{edu.stream}</h4>
      <p>{edu.duration}</p>
      <p className='college'>{edu.college}</p>
    </div>
    <br />
  </div>
));

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          // Optional: Unobserve after animation
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Increased threshold
        rootMargin: '-55px' // Trigger slightly after element comes into view
      }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-section" ref={educationRef}>
      <h2 className="fade-item">🎓 Education</h2>
      <div className='Education'>
        {educationDetails.map((edu) => (
          <EducationCard 
            key={edu.id} 
            edu={edu}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Education);