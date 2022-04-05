import React from 'react'
import { Rating } from '@mui/material';
import './Card.css'

function Card(props) {
    
    const setValue =()=>{
    }
   
   const {name , logo,star,description}  = props.review ;
  return (
    <div className="review-card">
    <div className="header-card">
        <h5 className="logo">{logo}</h5>
        <div className="name">
            <h3>{name}</h3>
        </div>
       
    </div>
    <Rating
            name="simple-controlled"
            value={star}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />

    <p className="description">"{description.slice(0 , 270)}"</p>
</div>
  )
}

export default Card