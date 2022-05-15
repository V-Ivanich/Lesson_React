
import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NaviBar() {
  let mar = {marginLeft: '15px'}
  let mar2 = {marginRight: '15px'}
  return (
  <>
    <Navbar expand='md' bg='dark' variant='dark'>
      <Navbar.Brand style={mar}>WebDev Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
          <Nav.Link><Link to='/about'>About</Link></Nav.Link>
        </Nav>
        <Nav style={mar2}>
          <Button variant='primary' className='me-2'>Log In</Button>
          <Button variant='primary'>Sing out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)}
export default NaviBar;