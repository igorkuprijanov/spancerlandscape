import React from 'react';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import { IconContext } from "react-icons";
import galleryData from './galleryData.js';
import Item from './item.js'

class Gallery extends React.Component{
    
    constructor(){
        super()
        this.state ={
            images: galleryData.map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>),
            bigimage: "hello"
        }
                                    
        this.moveLeft = this.moveLeft.bind(this)
        this.moveRight = this.moveRight.bind(this)
        this.filterImages = this.filterImages.bind(this)
        this.imageclick = this.imageclick.bind(this)
        this.closeImage = this.closeImage.bind(this)
    }
                                    
    moveLeft(){ document.getElementById('galleryimagesdiv').scrollLeft -= 200
        }
    
    moveRight(){ document.getElementById('galleryimagesdiv').scrollLeft += 200
    }
        
    filterImages(e){
        console.log(e.target.innerHTML)
        switch(e.target.innerHTML){
            case "All":
                for(let i = 0; i<galleryData.length; i++){
                    galleryData[i].isVisible = true
                }
                this.setState({
                    images: galleryData.map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>)
                })
                break
            case "Planning":
                    for(let i = 0; i<galleryData.length; i++ ){
                    if(galleryData[i].tag === "planning"){
                        galleryData[i].isVisible = true
                    }else{
                        galleryData[i].isVisible = false
                    }
                    }
                this.setState({
                        images: galleryData.filter((item)=> item.isVisible).map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>)
                              })
                break
            case "Installations":
                for(let i = 0; i<galleryData.length; i++ ){
                    if(galleryData[i].tag === "installation"){
                        galleryData[i].isVisible = true
                    }else{
                        galleryData[i].isVisible = false
                    }
                    }
                this.setState({
                        images: galleryData.filter((item)=> item.isVisible).map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>)
                              })
                break
            case "Greening":
                    for(let i = 0; i<galleryData.length; i++ ){
                    if(galleryData[i].tag === "greening"){
                        galleryData[i].isVisible = true
                    }else{
                        galleryData[i].isVisible = false
                    }
                    }
                this.setState({
                        images: galleryData.filter((item)=> item.isVisible).map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>)
                              })
                break
            case "Gardening":
                for(let i = 0; i<galleryData.length; i++ ){
                    if(galleryData[i].tag === "gardening"){
                        galleryData[i].isVisible = true
                    }else{
                        galleryData[i].isVisible = false
                    }
                    }
                this.setState({
                        images: galleryData.filter((item)=> item.isVisible).map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>)
                              })
                break
                    default:
                    console.log('say all!')
                for(let i = 0; i<galleryData.length; i++){
                    galleryData[i].isVisible = true
                }
                this.setState({
                    images: galleryData.map((item) => <Item item={item} key={item.id} image={item.source} shape={item.shape}/>)
                })
               }
    }
                              
    imageclick(e){
        if(e.target.id !== 'galleryimagesdiv'){
        document.getElementById('bigimagcontainer').style.display = 'block'
        document.getElementById('imgbig').style.display = 'block'
        document.body.style.overflow = 'hidden'
        document.getElementById('bigimagcontainer').style.top = (window.scrollY + (window.innerHeight/4)) + 'px'
        console.log(e.target.id)
        let currentImage
        for(let i = 0; i<galleryData.length; i++){
            if(i === e.target.id){
                currentImage = galleryData[i].source
            }
        }
        
        this.setState({
            bigimage: currentImage
        })
        }
    }
    closeImage(){
        console.log(window.scrollY)
        document.getElementById('bigimagcontainer').style.display = 'none'
        document.getElementById('imgbig').style.display = 'none'
        document.body.style.overflow = 'auto'
    }
    
    
    render(){
    return(
    <div id='gallery'>
      <div id='imgbig' onClick = {this.closeImage}>
      </div>
      <div id='bigimagcontainer'>
             <img alt='' id='bigimage' src={this.state.bigimage}/>
         </div> 
       <h1 id='galleryheading'>Our Gallery</h1>
       <p id='galleryheadtext'>We have created and implemented more than 100 projects over the course of our work.</p>
       <div id='gallerycategories'>
           <h4 className='gallerynav' onClick={this.filterImages}>All</h4>
           <h4 className='gallerynav' onClick={this.filterImages}>Planning</h4>
           <h4 className='gallerynav' onClick={this.filterImages}>Installations</h4>
           <h4 className='gallerynav' onClick={this.filterImages}>Greening</h4>
           <h4 className='gallerynav' onClick={this.filterImages}>Gardening</h4>
       </div>
       <div id='galleryimages'>
          <IconContext.Provider value={{ color: "black", className: "galleryarrow", size: '3em'}}>
          <RiArrowLeftSLine onClick = {this.moveLeft}/>
           <div id='galleryimagesdiv' onClick={this.imageclick}>
               {this.state.images}
           </div>
           <RiArrowRightSLine onClick = {this.moveRight}/>
           </IconContext.Provider>
       </div>
    </div>
    )
    }
}

export default Gallery;