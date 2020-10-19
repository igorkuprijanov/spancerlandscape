import React from 'react';
import './App.css';
import homebackground from './assets/homebackground.png'

function Home(){
    
    return(
    <div id='home'>
    <img src={homebackground} id='homebackground' alt=''/>
    <div id='homeall'>
    <h1 id='homeheading'>Modern landscape design from project to implementation</h1>
    <p id='homeparagraph'>No matter where you live, landscape design is a huge part of creating a healthy lifestyle - plants complement architecture to perfection.</p>
    <button className='btn' id='homebuttonstart'><a className='homebuttonsanchors' id='acnchor1' href='#prices'>Get Starter</a></button>
    <button className='btn' id='homebuttonprojects'><a className='homebuttonsanchors' id='acnchor2' href='#gallery'>View Projects</a></button>
    </div>
    </div>
    )
}

export default Home;