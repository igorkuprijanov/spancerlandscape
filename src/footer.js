import React from 'react'
import {RiMailLine, RiPhoneLine, RiRegisteredLine} from 'react-icons/ri';
import { IconContext } from "react-icons";
import gallery1 from './assets/gallery/gallery1.jpg'
import gallery2 from './assets/gallery/gallery2.jpg'
import gallery3 from './assets/gallery/gallery3.jpg'
import gallery4 from './assets/gallery/gallery4.jpg'
import gallery5 from './assets/gallery/gallery5.jpg'
import gallery6 from './assets/gallery/gallery6.jpg'


function Footer(){
    
    function redirectToInsta(){
        window.open('https://instagram.com', '_blank')
    }
    
    return(
        <div id='footer'>
           <div id='footerdivs'>
            <div className='footersection'>
                <p>We can turn any ordinary yard into a extraordinary place for and a delightful view. Our company is capable of garden reconsturction on every step, from planning to greening to sustaining. Make the right choice by choosing the best.</p>
            </div>
            <div className='footersection'>
                <h3 id='footeruseful'>Useful links</h3>
                <ul>
                    <li><a className='footerlinks' href='#home'>Home</a></li>
                    <li><a className='footerlinks' href='#aboutsection'>About</a></li>
                    <li><a className='footerlinks' href='#services'>Services</a></li>
                    <li><a className='footerlinks' href='#prices'>Pricing</a></li>
                    <li><a className='footerlinks' href='#gallery'>Gallery</a></li>
                    <li><a className='footerlinks' href='#contacts'>Contacts</a></li>
                </ul>
            </div>
            <div className='footersection'>
                <h3 id='instagramfollow' onClick={redirectToInsta}>Instagram Follow</h3>
                <div id='footerimgaescontainer'>
                    <img onClick={redirectToInsta} className='footerimg' src={gallery1} alt=""/>
                    <img onClick={redirectToInsta} className='footerimg' src={gallery2} alt=""/>
                    <img onClick={redirectToInsta} className='footerimg' src={gallery3} alt=""/>
                    <img onClick={redirectToInsta} className='footerimg' src={gallery4} alt=""/>
                    <img onClick={redirectToInsta} className='footerimg' src={gallery5} alt=""/>
                    <img onClick={redirectToInsta} className='footerimg' src={gallery6} alt=""/>
                </div>
            </div>
            <div className='footersection'>
                <h3 id='footercontactus'>Contact Us</h3>
                <IconContext.Provider value={{ color: "white", className: "footericons", size: '1em' }}>
                <div className='footercontacts'>
                <RiMailLine/><p className='footercontactaddress'> info.garden@spancer.com</p>
                </div>
                <div className='footercontacts'>
                <RiPhoneLine/><p className='footercontactaddress'>+447 800 767 690</p>
                </div>
                </IconContext.Provider>
            </div>
            </div>
            <div>
               <IconContext.Provider value={{ color: "white", className: "footericons", size: '1em' }}>
                <p id='rights'>All rights reserved <RiRegisteredLine/></p>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Footer