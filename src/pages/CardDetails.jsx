import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data';

const CardDetails = () => {
  const navigate=useNavigate();
  const{namE}=useParams();
  return (
    <div>
      {data.map((a)=>(a.name === namE &&
       <div className='text-center'>
       <h3>{a.name}</h3>
        <img src={a.img} alt=""  width="400px"/>
        <h4>{a.text}</h4>
        <h5>{a.yorum} </h5>
        <div className='text-center '>
      <button className='btn btn-warning m-2' onClick={()=>navigate(-1)}>GO BACK</button>
      <button className='btn btn-primary' onClick={()=>navigate("/")}>GO HOME</button>
      </div>
        </div>
      )
        
      )}
      
    </div>
  )
}

export default CardDetails