import React from 'react'
import './Experience.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="Experience">
      <h3>Get To Know</h3>
      <h2>My Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>SQL Lite (C language)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>Object Oriented Programming</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience