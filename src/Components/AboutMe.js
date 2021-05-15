import React from 'react'
import {aboutMeIntro,introImage,tools} from './StyleAboutMe'
import img from '../Assets/img.jpg'

const AboutMe=()=>{


    return (
        
          <div className='main' style={aboutMeIntro}>
            <h1 style={{color:'black'}}>About me.</h1>
            <img src={img} style={introImage} alt="My photo" />
            
            
            <p > Hi I am Sonya Dawar, a 24 year old Web developer, Finance Enthusiast, and a blogger living in India.<br></br><br></br>
              I am a Computer Science Engineer, currently working with awesome folks at <a href="https://www.youtube.com" >Infosys.</a><br></br><br></br>
             Have a look at my skills or just connect with me on LinkedIn.<br></br><br></br>
              I am always excited to do business with like minded people.
             </p><br></br><br></br>
            <a href="https://www.youtube.com"><i class="fab fa-linkedin"></i></a> 
             

          </div>
    )
    
}

export default AboutMe;