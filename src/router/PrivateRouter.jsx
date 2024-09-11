import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
// const email="cmylmz@gmail.com"
// const password= "1234"

  return JSON.parse(localStorage.getItem("EMAIL"))=== "cem" &&
  JSON.parse(localStorage.getItem("PASSWORD")) === "1234" ? (<Outlet/>) : (<Navigate to="/Login"/>)

  
}

export default PrivateRouter