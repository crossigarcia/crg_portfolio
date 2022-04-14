import React from 'react';
import RoundImage from '../../components/roundImage/roundImage';
import './about.scss';

const About = () => {
   return (
      <section className='about-container container'>
         <div className='row'>
            <div className='col-6'>
               <p>
                  Formerly a photographer now a programmer, trying to bring the best of both worlds to all my projects. Frontend Web Developer with a certificate in Full-Stack Development from UC Berkeley Extension 
                  focusing on Responsive Web Design that meets accessibility standards as well as utilizing the MERN stack. Acute sense of responsibility, 
                  organized, and attentive to detail. Ample experience with group work and adapting to different leadership, including recent work with a team 
                  of five to create a full-stack app for building personal and shared song lists for karaoke. I am particularly excited to learn more about and create 
                  responsive web designs/applications that meet accessibility standards and work with teams to creatively problem solve UI/UX design solutions.
               </p>
            </div>
            <div className='col-6'>
               <div>
                  <RoundImage/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About;