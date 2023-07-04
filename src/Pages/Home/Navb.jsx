import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 import  './navbar.css'



export default function Navb() {
  return (
    <div className='top'>
      <Navbar  expand="lg" className="navabar">
      <Container className='navbar-text'>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown className='catrgory' title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/helmet" className='drop-aling'>Helmet</NavDropdown.Item>
              <br />
              <NavDropdown.Item href="/ridinggears">
                Riding Gears
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item href="/jacket">Jacket</NavDropdown.Item> <br />

              <NavDropdown.Item href="/automotive">Automotive</NavDropdown.Item>
              <br />
              <NavDropdown.Item href="wheels">wheels</NavDropdown.Item>
              <br />
              <NavDropdown.Item href="seats">Seats</NavDropdown.Item>
              <br />
            </NavDropdown>



            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
               <div className='icons-setting'   >
              <Nav.Link href="/search">
                <i className="fas fa-search icons"></i>
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <i className="fas fa-heart icons"></i>
              </Nav.Link>
              <Nav.Link href="/profile">
                <i className="fas fa-user icons"></i>
              </Nav.Link>
              </div>
            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
