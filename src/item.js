import React from "react"

function Item(props){
    
    return(
    
    <img src={props.image} className={props.shape} alt="" id={props.item.id}/>
   
    )
}

export default Item