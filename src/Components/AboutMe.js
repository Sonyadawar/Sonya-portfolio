import React from 'react'
import {aboutMeIntro,introImage} from './StyleAboutMe'
import img from '../Assets/img.jpg'

const AboutMe=()=>{


    return (
          <div className='main' style={aboutMeIntro}>
            <h1 style={{color:'black'}}>About me.</h1>
             <p > Hi I am Sonya Dawar, a 24 year old Web developer, Finance Enthusiast, and a blogger living in India. I am a Computer Science Engineer, currently working with awesome folks at Infosys.
             Have a look at my skills or just connect with me on LinkedIn. I am always excited to do business with like minded people.
             </p>
             <img src={img} alt="My photo" />;

          </div>
    )
    
}

export default AboutMe;