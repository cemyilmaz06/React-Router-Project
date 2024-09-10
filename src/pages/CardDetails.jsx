import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data';

const CardDetails = () => {
  const{namE}=useParams();
  return (
    <div>
      {data.map((a)=>(a.name === namE &&
       <div className='text-center'>
       <h3>{a.name}</h3>
        <img src={a.img} alt=""  width="400px"/>
        <h4>{a.text}</h4>
        <h5>{a.yorum} </h5>
        </div>
      )
        
      )}
    </div>
  )
}

export default CardDetails