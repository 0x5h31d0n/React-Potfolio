import React from 'react'
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
  return (
    <section className="about">
      <h2>⚙️ Skills</h2>
      <div className='icons'>
        <img src={linux} alt="Linux" className='linx'/> 
        <img src={astro} alt="Astro" className='astro'/>
        <img src={react} alt="React" className='react'/>
        <img src={flask} alt="Flask" id='invert' className='flask'/>
        <img src={django} alt="Django" id='invert' className='django'/>
        <img src={html} alt="Html" className='html'/>
        <img src={css} alt="Css" className='css'/>
        <img src={mysql} alt="Mysql" className='mysql'/>
        <img src={python} alt="python" className='python'/>
        <img src={c} alt="c" id='invert' className='c'/>
        <img src={java} alt="java" className='java'/>
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