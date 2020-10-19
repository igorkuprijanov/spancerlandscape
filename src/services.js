import React from 'react';
import Servicecard from './servicecard.js'
import {RiPagesLine, RiSeedlingLine, RiLuggageCartLine, RiScissorsLine} from 'react-icons/ri';

function Services(){
    
    return(
    <div id='services'>
        <h1 id='servicesheading'>Special services we provide for our customer</h1>
        <p id='servicesparagraph'>Combining your ideas and our designers, experience and vision to create a professional high quality garden.</p>
        <div id='cardscontainer'>
        <Servicecard title="Garden planning" description="Garden planning is the first and very serious stage on the way to improving your site, affection functional and aesthetic composition." icon=<RiPagesLine/>/>
        <Servicecard title="The installations" description="It is impossible to imagine a truly roomy and cozy garden without small but useful architectural solutions." icon=<RiLuggageCartLine/>/>
        <Servicecard title="Greening" description="Our experience allows us to plan your planting correctly. We also monitor the quality of planting material." icon=<RiSeedlingLine/>/>
        <Servicecard title="Gardening" description="We provide a full range of garden care services, saving you from the problems of maintenance." icon=<RiScissorsLine/>/>
        </div>
    </div>
    )
}

export default Services;