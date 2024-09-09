import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from "../img/logo.png"

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" >
      <Container>
       <Link to="/">
       <img src={logo} alt="" />
       </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" style={({isActive})=>({color: isActive && "red"})}>Home</NavLink>
            <NavLink className="nav-link" to="/Teacher" style={({isActive})=>({fontSize:isActive && "50px"})} >Teacher</NavLink>
            <NavLink className="nav-link" to="/Courses" style={({isActive})=>({fontWeight:isActive && "bolder"})}>Courses</NavLink>
            <NavLink className="nav-link" to="Contact"style={({isActive})=>({backgroundColor: isActive && "salmon"})}>Contact</NavLink>
            <NavLink className="nav-link" to="Paths">Paths</NavLink>
            <Nav.Link target='blank' href='https://github.com/'>Github</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default MyNavbar