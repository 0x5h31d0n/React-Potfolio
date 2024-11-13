import React, { useEffect, useRef } from 'react'
import linux from '../assets/linux.png'
import astro from '../assets/astro.png'
import react from '../assets/react.png'
import flask from '../assets/flask.png'
import django from '../assets/django.png'
import html from '../assets/html.png'
import mysql from '../assets/mysql.png'
import css from '../assets/css.png'
import python from '../assets/python.png'
import java from '../assets/java.png'
import c from '../assets/c.png'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import '../style.css'

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-section" ref={skillsRef}>
      <h2 className="fade-item">⚙️ Skills</h2>
      <div className='icons'>
        {/* Add fade-item class to each img */}
        <img src={linux} alt="Linux" className='linx fade-item' loading="lazy"/> 
        <img src={astro} alt="Astro" className='astro fade-item' loading="lazy"/>
        <img src={react} alt="React" className='react fade-item' loading="lazy"/>
        <img src={flask} alt="Flask" id='invert' className='flask fade-item' loading="lazy"/>
        <img src={django} alt="Django" id='invert' className='django fade-item' loading="lazy"/>
        <img src={html} alt="Html" className='html fade-item' loading="lazy"/>
        <img src={css} alt="Css" className='css fade-item' loading="lazy"/>
        <img src={mysql} alt="Mysql" className='mysql fade-item' loading="lazy"/>
        <img src={python} alt="python" className='python fade-item' loading="lazy"/>
        <img src={c} alt="c" id='invert' className='c fade-item' loading="lazy"/>
        <img src={java} alt="java" className='java fade-item' loading="lazy"/>
      </div>
      <Tooltip anchorSelect=".linx" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        Linux
      </Tooltip>
      <Tooltip anchorSelect=".astro" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        Astro 🚀
      </Tooltip>
      <Tooltip anchorSelect=".react" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        React
      </Tooltip>
      <Tooltip anchorSelect=".flask" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        Flask
      </Tooltip>
      <Tooltip anchorSelect=".django" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        Django
      </Tooltip>
      <Tooltip anchorSelect=".html" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        HTML
      </Tooltip>
      <Tooltip anchorSelect=".css" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        CSS
      </Tooltip>
      <Tooltip anchorSelect=".mysql" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        Mysql
      </Tooltip>
      <Tooltip anchorSelect=".python" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        python
      </Tooltip>
      <Tooltip anchorSelect=".c" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        C
      </Tooltip>
      <Tooltip anchorSelect=".java" place="top" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222",  fontFamily: "monospace", fontSize: "15px"}}>
        Java
      </Tooltip>
    </section>
  )
}

export default Skills