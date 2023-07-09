import React from "react";
import "./baner.css";

import Carousel from "react-bootstrap/Carousel";
// import { Container } from "@mui/material";
import {  Container, Row,Col } from "react-bootstrap";

export default function Banner() {
  return (

        <Container fluid className="container-main">
           <Row>
             <Col md={8}>
             <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 baner-img"
            src={require("../../assets/img/baner8.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>"Experience Comfort and Safety"</h3>
            <p>
              A rider wearing a high-quality jacket with advanced safety
              features. Emphasize the benefits of comfortable and protective
              gear for a smooth and secure ride.{" "}
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 baner-img"
            src={require("../../assets/img/baner6.jpg")}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 baner-img"
            src={require("../../assets/img/baner3.jpg")}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
             </Col>
             <Col md={4} className="baner-second-main mt-1">
               
          
             <div className="baner-2-section"> 
               <img
                 className="baner-second"
                 src={require("../../assets/img/baner-second-img.webp")}
                 alt="" />
         </div>

         <div className=" baner-img-th"> 
               <img
                 className="baner-second"
                 src={require("../../assets/img/baner-3.webp")}
                 alt="" />
         </div>







             </Col>
           </Row>
        </Container>
      
  
  );
}
