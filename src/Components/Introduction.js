import React,{useState} from 'react'
import {divMainStyle,headingStyles,typewriterStyle} from './StyleIntro'
import plane from '../Assets/plane.gif'
import Typewriter from 'typewriter-effect'

const Introduction=()=>{

    const [bgColour, setBgColour] = useState("skyBlue")

    const buttonStyle={
        borderRadius: '60px',
        margin: '10px 0px',
        cursor: 'pointer',
        padding:'20px 15px',
        background:`${bgColour}`,
        color:'black',
        fontSize:"18px",
        }

    return(
        <div className='main' style={divMainStyle}>
        <img src={plane} alt="plane" />;
            <h1 style={headingStyles}>Sonya Dawar</h1>
            <div  style={typewriterStyle}>
            <Typewriter onInit={(typewriter)=>{
                typewriter.typeString("I love food!")
                .start()
                
                .deleteAll()
                .typeString("I love travelling!")
                
                .start();
            }}/> </div>
               
            
            <button style={buttonStyle} onMouseEnter={() => setBgColour("white")}
                                        onMouseLeave={() => setBgColour("skyBlue")}>
                                        CONNECT WITH ME! </button>
         </div>    
    )
}

export default Introduction;