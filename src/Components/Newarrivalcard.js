import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Newarrivalcard = (props) => {
  let { imgSrc } = props.data;

  return (
    <div>
    
      <Card className="p-0 overflow-hidden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-dark">
          <Card.Img variant="top" src={imgSrc} />
        </div>
      </Card>
    </div>
  );
};

export default Newarrivalcard;
