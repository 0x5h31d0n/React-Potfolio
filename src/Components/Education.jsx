import React from 'react'
import '../style.css'

const Education = () => {
  return (
    <section className="about">
      <h2>🎓 Education</h2>
      <div className='Education'>
        <div className='edu'>
          <h3 className='degree'>✨ Bachelor of Engineering</h3>
          <div className="lower-education">
          <h4>👉🏻 Computer Science</h4>
          <p>📆 2022 - 2026</p>
          <p className='college'>🏫 St. Joseph Engg College</p>
          </div>
        </div>
        <br/>
        <div className='edu'>
          <h3 className='degree'>✨ Pre-University College</h3>
          <div className="lower-education">
          <h4>👉🏻 Science PCMC</h4>
          <p>📆 2020 - 2022</p>
          <p className='college'>🏫 St. Aloysius PU College</p>
          </div>
        </div>
        <br/>
        <div className='edu'>
          <h3 className='degree'>✨ High School</h3>
          <div className="lower-education">
          <h4>👉🏻 General</h4>
          <p>📆 2017 - 2020</p>
          <p className='college'>🏫 St. Aloysius High School</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education