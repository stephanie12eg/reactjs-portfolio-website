import React from 'react'
import './About.css'
import ME from '../../Assets/PIC.JPG';
import {FaUniversity} from 'react-icons/fa'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id="About">
        <h3>Get To Know</h3>
        <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me"> 
          <img src={ME} alt="About" /> 
        </div> 

        <div className="about__content">
           <div className="about__cards">
              <article className='about__card'>
                <FaUniversity className='about__icon'/>
                <h5>Experience</h5>
                <small>3rd Year Computer Science Student</small>
              </article>

              <article className='about__card'>
                <MdOutlineLocalGroceryStore className='about__icon'/>
                <h5>Personal Projects</h5>
                <small>Developing a Jewellery e-commerce business and clothing e-commerce website</small>
              </article>

              <article className='about__card'>
                <FaLaptopCode className='about__icon'/>
                <h5>Projects</h5>
                <small>...</small>
              </article>
            </div>

            <p> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Optio suscipit in consequatur. Quas reiciendis perferendis quia nam inventore accusamus. 
              Accusantium voluptates quod repellendus vero placeat, nam enim tenetur nulla iure.
            </p>

            <a href="#Contact" className='btn btn-primary'>Get in Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About