import React from 'react';

class Prices extends React.Component{
    
    constructor(){
        super()
        this.state = {
            price: "Estimated price"
        }
      
        
        this.changeArea = this.changeArea.bind(this)
    }
    
    changeArea(){
        
        let unit = 1
        let decor = 1
        let green = 1
        let envi = 1
        let money = (document.getElementById('moneyinput').value)*31.4
        let currency = 1
        
        //unit change
        switch(document.getElementById('unitselect').value){
            case "m²":
                unit = 1
                break
            case "yd²":
                unit = 1.3
                break
            case 'hectare':
                unit = 1.8
                break
            default:
                unit = 1
               }
        //decor change
        switch(document.getElementById('decor').value){
            case "No decorations":
                decor = 1
                break
            case "Light decorations":
                decor = 1.4
                break
            case "Medium decorations":
                decor = 1.8
                break
            case "Heavy decorations":
                decor = 2.3
                break
            default:
                decor = 1
               }
        //gree change
        switch(document.getElementById('greenery').value){
            case "No new plants":
                green = 1
                break
            case "Small amount":
                green = 1.4
                break
            case "Medium amount":
                green = 1.8
                break
            case "Large amount":
                green = 2.3
                break
            default:
                green = 1
               }
        //change envi
        switch(document.getElementById('environment').value){
            case "None":
                envi = 1
                break
            case "Light":
                envi = 1.4
                break
            case "Medium":
                envi = 1.8
                break
            case "Heavy":
                envi = 2.3
                break
            default:
                envi = 1
               }
        //currency change
        switch(document.getElementById('currency').value){
                case "$":
                currency = 1
                break
                case "€":
                currency = 0.85
                break
                case '₸':
                currency = 429.38
                break
                default:
                currency = 1
               }
        let total = (Math.round(((unit*decor*green*envi*money)+Number.EPSILON) * 100 ) / 100)*currency
        
        this.setState({
            price: total
        })
    }
    
    
    render(){
    return(
    <div id='prices'>
     <div id='pricestoptext'>
      <div>
       <h1 id='pricestitle'>The Pricing</h1>
       <p>Pricing is calculated by using the area of the greening area, amount of decorations and greenery and environmental variables.</p>
       </div>
       <div>
       <h3>Area</h3>
       <p>Fairly simple variable, the larger area is, the more materials work and time is needed to complete the work.</p>
       </div>
       </div>
       <div id='pricesbigdiv'>
       <div id='pricestextdiv'>
       <div>
       <h3>Decorations</h3>
       <p>Some people like more simple and plain environments, some on the other hand like voluptuous gardens in the style of Luis XVI. Decorations can be done in many different ways, that can affect price in many ways.</p>
       </div>
       <div>
       <h3>Greenery</h3>
       <p>The total amount of new plants, grass and natural objects. Our plants and greenery are taken from commertial nature preserves that enables us to get plants of all sizes and ages.</p>
       </div>
       <div>
       <h3>Environmental variables</h3>
       <p>Environment defines our work. We can create almost anything: create or remove hills, drain or create water bodies, fill and dig holes. Yet it is the most extencive and time-consuming work.</p>
       </div>
       </div>
       <div id='pricescalc'>
           <p id='calctext'>You can calculate approximate price with this simple calculator (final price may wary).</p>
           <div className='calcinput'>
           <input className='lable' placeholder="Area" type='number' id='moneyinput' min='0' onChange={this.changeArea}/>
           <select className='selection' onChange={this.changeArea} id='unitselect'>
               <option>m²</option>
               <option>yd²</option>
               <option>hectare </option>
           </select>
           </div>
           <div className='calcinput'>
              <label className='lable' htmlFor='decor'>Decorations:</label>
               <select className='selection' id='decor' name='decor' onChange={this.changeArea}>
                  <option>No decorations</option>
                   <option>Light decorations</option>
                   <option>Medium decorations</option>
                   <option>Heavy decorations</option>
               </select>
           </div>
            <div className='calcinput'>
              <label className='lable' htmlFor='greenery'>Greenery:</label>
               <select className='selection' id='greenery' name='greenery' onChange={this.changeArea}>
                   <option>No new plants</option>
                   <option>Small amount</option>
                   <option>Medium amount</option>
                   <option>Large amount</option>
               </select>
           </div>
           <div className='calcinput'>
              <label className='lable' htmlFor='environment'>Environment:</label>
               <select className='selection' id='environment' name='environment' onChange={this.changeArea}>
                   <option>None</option>
                   <option>Light</option>
                   <option>Medium</option>
                   <option>Heavy</option>
               </select>
           </div>
           <div id='outputdiv'>
           <h3 id='output'>{this.state.price}</h3>
           <select onChange={this.changeArea} id='currency'>
               <option>$</option>
               <option>€</option>
               <option>₸</option>
           </select>
           </div>
       </div>
       </div>
        </div>
    )
}}

export default Prices;