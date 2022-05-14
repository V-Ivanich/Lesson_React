
import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

export default function NaviBar() {

  return (
  <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <NaviBar.Brand>WebDev Blog</NaviBar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Users</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
        <Nav>
          <Button variant='primary'>Log In</Button>
          <Button variant='primary'>Sing out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)}
