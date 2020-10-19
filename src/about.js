import React from 'react';
import aboutimage from "./assets/aboutimage.jpg";
import './App.css';

function About(){
    
    return(
    <div id='aboutsection'>
        <img src={aboutimage} id='aboutimage' alt=""/>
        <div id='abouttext'>
        <h1 id='abouthead'>About us</h1>
        <p id='aboutpar1'>The Landscape Design Studio is based in Lambeth, South London and offers services from landscape design to garden maitenance. Our team will help you to create an ergonomic environment with a modern design. We use an ecological approach, preserving nature and it's aesthetics.</p>
        <p id='aboutpar2'>We stand by the quality of our landscaping projects and are proud of our dedication to delivering top customer service.</p>
        <button id='aboutbtn'><a id='learnmoreanchor' href='#services'>Learn more</a></button>
        </div>
    </div>
    )
}

export default About;