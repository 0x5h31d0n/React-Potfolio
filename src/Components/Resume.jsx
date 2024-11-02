import React from 'react'
import '../style.css'

const resume = () => {
  return (
    <section className='main-resume'>
    <h2 className='top'>Resume</h2>
    <div className='resume-container'>
        <iframe src="https://drive.google.com/file/d/1PaGPYXdZtvVWfIxz40BaJmBkKrvWUBGY/preview" 
        allow="autoplay" className='resume'>
        </iframe>
    </div>
    </section>
  )
}

export default resume