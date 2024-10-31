import React from 'react'
import '../style.css'

const educationDetails = [
  {
    degree: 'Bachelor of Engineering',
    stream: 'Computer Science',
    duration: '2022 - 2026',
    college: 'St. Joseph Engg College'
  },
  {
    degree: 'Pre-University College',
    stream: 'PCMC',
    duration: '2020 - 2022',
    college: 'St. Aloysius PU College'
  },
  {
    degree: 'High School',
    stream: 'General',
    duration: '2017 - 2020',
    college: 'St. Aloysius High School'
  }
];

const Education = () => {
  return (
    <section className="about">
      <h2>🎓 Education</h2>
      <div className='Education'>
        {educationDetails.map((edu, index) => (
          <div className='edu' key={index}>
            <h3 className='degree'>{edu.degree}</h3>
            <div className="lower-education">
              <h4 className="edu-stream">{edu.stream}</h4>
              <p>{edu.duration}</p>
              <p className='college'>{edu.college}</p>
            </div>
            <br />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education