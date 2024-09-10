import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
const email="cmylmz@gmail.com"
const password= "1234"

  return email === "cmylmz@gmail.com" && password === "123" ? <Outlet/> : <Navigate to="/"/>

  
}

export default PrivateRouter