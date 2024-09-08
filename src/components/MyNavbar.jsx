import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from "../img/logo.png"

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <Link to="/">
       <img src={logo} alt="" />
       </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink>Home</NavLink>
            <NavLink>Teacher</NavLink>
            <NavLink>Courses</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Paths</NavLink>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default MyNavbar