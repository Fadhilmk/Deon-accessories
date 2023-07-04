import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../src/Categories.css";
import React from "react";

function Categories() {
  return (
    <div>
      <Row>
        <Col sm={12} className="responsive-image">
          <Card>
            <Card.Img 
              variant="top"
              src="https://store.royalenfield.com/media/catalog/category/Riding_jacket.jpg"
            />
            
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHrjmWnf1bTNFzZwir0b9-u7DqPVpmKmKgA&usqp=CAU" />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHrjmWnf1bTNFzZwir0b9-u7DqPVpmKmKgA&usqp=CAU" />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcTdeMLVR27lSzTxid5Z26A2OxqdgLfJjSw&usqp=CAU" />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcTdeMLVR27lSzTxid5Z26A2OxqdgLfJjSw&usqp=CAU" />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcTdeMLVR27lSzTxid5Z26A2OxqdgLfJjSw&usqp=CAU" />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default Categories;
