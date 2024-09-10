import React from 'react'
import { useLocation } from 'react-router-dom'

const TeacherDetails = () => {
  const{state:person}=useLocation();
  return (
   
    <div>TeacherDetails</div>
  )
}

export default TeacherDetails