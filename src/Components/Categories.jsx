import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import helmet2 from '../assets/images/helmet2.jpg';
import ridinggears2 from '../assets/images/riding2.jpg';
import seat from '../assets/images/seats.jpg';
import wheels from '../assets/images/wheels.jpg';
import automotive from '../assets/images/automotive.jpg';
import './categories.css'; // Import the CSS file for custom styles

const Categories = () => {
  return (
    <div className="App">
      <Container className="p-2">
  <Row>
    <Col md="12">
      <Card>
        <Card.Img style={{ height: '300px' }} variant="top" src={helmet2} />
        <div className="overlay">
          <h3 className="image-text">EXCLUSIVE HELMETS</h3>
        </div>
      </Card>
    </Col>
  </Row>
</Container>

<Container>
  <Row>
    <Col md="6">
      <Card>
        <Card.Img variant="top" src="https://cdn.hiconsumption.com/wp-content/uploads/2020/06/Best-Motorcycle-Jackets-FB.jpg" />
        <div className="overlay"></div>
        <div className="overlay1">
          <h3 className="image-text1">JACKETS</h3>
        </div>
      </Card>
    </Col>

    <Col md="6">
      <Card>
        <Card.Img variant="top" src={ridinggears2} />
        <div className="overlay"></div>
        <div className="overlay1">
          <h3 className="image-text1">RIDING GEARS</h3>
        </div>
      </Card>
    </Col>
  </Row>
</Container>


      <Container>
        <Row>
          <Col md="4">
            <Card>
              <Card.Img variant="top" style={{ height: '17.7rem' }} src={seat} />
              <div className="overlay"></div>
              <div className="overlay2">
                <h3 className="image-text2">SEAT</h3>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img variant="top" style={{ height: '17.7rem' }} src={wheels} />
              <div className="overlay"></div>
              <div className="overlay2">
                <h3 className="image-text2">WHEELS</h3>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img variant="top" style={{ height: '17.7rem' }} src={automotive} />
              <div className="overlay"></div>
              <div className="overlay2">
                <h3 className="image-text2">AUTOMOTIVE</h3>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
