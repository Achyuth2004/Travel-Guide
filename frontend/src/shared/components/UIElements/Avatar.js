import React from 'react'
import './Avatar.css'

function Avatar(props) {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
        <img src={props.image} alt={props.name} style={{width:props.width,height:props.height}}></img>      
    </div>
  )
}

export default Avatar
