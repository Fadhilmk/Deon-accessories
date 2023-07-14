import React from 'react'
import Container from 'react-bootstrap/Container';

import './footernav.css'
import { Row,Col } from 'react-bootstrap';

export default function FooterNav() {
  return (
    <div  className='mobile-viwe'>
       <Container fluid  className='mobile-nav-aling' >
        <Row>
          <Col md={12}>
               <div   className='footer-nav-icon'> 
               <a href='./'> <i   className="fas fa-home icons-footer"></i></a>
               <i className="fas fa-search icons-footer"></i>
               <i className="fas fa-heart icons-footer"></i> 
               <i className="fas fa-user icons-footer"></i>
               </div>
          </Col>
        </Row>
       </Container> 


    </div>
  )
}
