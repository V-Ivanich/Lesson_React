
import React from "react";
import './navibar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


function NaviBar() {
  return (
  <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
   <Navbar.Brand>React-Lisson</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">

     <Nav className="me-auto">
       <Nav.Link><Link className="nones" to="/">Home</Link></Nav.Link>
       <Nav.Link><Link className="nones" to="/users">Users</Link></Nav.Link>
       <Nav.Link><Link className="nones" to="about">About</Link></Nav.Link>
     </Nav>
     <Nav>
       <Nav.Link href="#">More deets</Nav.Link>
       <Nav.Link href="#">Dank memes</Nav.Link>
     </Nav>
     
   </Navbar.Collapse>
  </Container>
</Navbar>
  </>
)}
export default NaviBar;