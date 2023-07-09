import React from "react";
// import Card from "react-bootstrap/Card";
// import backgroundImage from "../src/assets/feature-product.jpeg";
import "./Featurespro.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from "react-bootstrap";
// import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";


const Featurespro = () => {
  // const containerStyle = {
  //   backgroundImage: `url(${backgroundImage})`,
  // };

  return (
    <div className="ftrs-pro">
         <h1 className="freature-product-head">Featrure product</h1>
   <Container>
     <Row className="mt-5"> 
      <Col md={4} lg={4} >
      <Card className="feature-card-aling" style={{ width: '18rem' }}>
      <Card.Img className="feature-img" variant="top" src={require("../src/assets/img/Feature/feature-5.jpg")} />
     
      <Card.Body>
        <Card.Title className="feature-titel"> Jacket</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        
      </Card.Body>
    </Card>
      </Col>

      <Col md={4} lg={4}>
      <Card className="feature-card-aling" style={{ width: '18rem' }}>
      <Card.Img className="feature-img" variant="top" src={require("../src/assets/img/Feature/feature8.jpg")} />
      <Card.Body>
        <Card.Title className="feature-titel"> Helmet</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        
      </Card.Body>
    </Card>
      </Col>

      <Col md={4} lg={4}>
      <Card className="feature-card-aling" style={{ width: '18rem' }}>
      <Card.Img className="feature-img" variant="top" src={require("../src/assets/img/Feature/fearure-6.jpeg")} />
      <Card.Body>
        <Card.Title className="feature-titel">Ridingear</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
       
      </Card.Body>
    </Card>
      </Col>
     </Row>
   </Container>



    
</div>

  );
}
 

export default Featurespro;
