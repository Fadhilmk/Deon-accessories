import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './footernav.css'

export default function FooterNav() {
  return (
    <div>
      <Navbar fixed="bottom" expand="sm" className="navabar-footer">
      <Container className='navbar-text-footer'>
        
       
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ms-auto  me-auto  ">
               <div className='icons-setting-footer'   >
              <Nav.Link href="#">
                <i className="fas fa-search icons-footer"></i>
              </Nav.Link>
              <Nav.Link href="#">
                <i className="fas fa-heart icons-footer"></i>
              </Nav.Link>
              <Nav.Link href="/">
                <i className="fas fa-user icons-footer"></i>
              </Nav.Link>
              </div>
            </Nav>

        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>

    </div>
  )
}
