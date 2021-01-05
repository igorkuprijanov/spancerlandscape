import React from 'react';
import './App.css';

function Contacts(){
    
    function contactsSend(){
        alert("Your message has been sent. We will respond withing 24 hours!")
    }
    
    return(
    <div id='contacts'>
       <h1 id='contactshead'>Leave a request for free consultation</h1>
       <form id='contactsform'>
          <div id='contactsinputs'>
           <input placeholder="Your name" />
           <input placeholder='E-mail'/>
           <input placeholder='Phone' />
           <input placeholder='Address'/>
           </div>
           <div id='contactscheck'>
           <input id='inputcheck' type='checkbox'/><label id='checkboxlabel'>I agree to the processing of personal data</label>
           </div>
           <div id='contactsbuttoncontainer'>
               <button id='contactsbutton' onClick={contactsSend}>Send</button>
           </div>
       </form>
    </div>
    )
}

export default Contacts;