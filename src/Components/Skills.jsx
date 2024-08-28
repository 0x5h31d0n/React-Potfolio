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

const Skills = () => {
  return (
    <section className="about">
      <h2>⚙️ Skills</h2>
      <div className='icons'>
        <img src={linux} alt="Linux"/>
        <img src={astro} alt="Astro" />
        <img src={react} alt="React" />
        <img src={flask} alt="Flask" id='invert'/>
        <img src={django} alt="Django" id='invert'/>
        <img src={html} alt="Html"/>
        <img src={css} alt="Css"/>
        <img src={mysql} alt="Mysql"/>
        <img src={python} alt="python"/>
        <img src={c} alt="c" id='invert'/>
        <img src={java} alt="java"/>
      </div>
    </section>
  )
}

export default Skills