import React from 'react';
import './App.css';
import { IconContext } from "react-icons";
import bg from './assets/cardsbg.svg'

function Servicecard(props){
    
    return(
    <div id='servicecard'>
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: '2em' }}>
        <div id='cardimg'>
        <img src={bg} id='cardbg' alt=""/>
        <div id='icon'>
        {props.icon}
        </div>
        </div>
        </IconContext.Provider>
        <h2 id='cardtitle'>{props.title}</h2>
        <p id='carddescription'>{props.description}</p>
    </div>
    )
}

export default Servicecard;