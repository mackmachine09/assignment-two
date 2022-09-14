import React from 'react'
import './Card.css'

export const Card = ({channel,img,rating,popularity}) => {
  
  let number=Math.round(rating);
  let arr=[];
  for(let i=0;i<number;i++){
    arr[i]=i;
  }

  return (
    <div className='card'>
        <h3>{channel}</h3>
        <div className='card-image'>
          <img src={img}/>
        </div>
        <div className='card-stats'>
          <p className='mics'>
            {arr.map((i)=>{return <img key={i} src='../Assets/mic1.png'/>})}  
            {rating}
          </p>
          <h4>{popularity}</h4>
        </div>
    </div>
  )
}