import React from 'react';
import Card from 'react-bootstrap/Card';
import './helmet.css';  
import Footer from '../../Components/Footer/Footer';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Helmet = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://www.store4riders.com/media/catalog/product/cache/acb4cb0d87e9aeac9211dd6f5279c85d/s/m/smk-titan-the-panther-_1_.jpg',
    },
    {
      id: 2,
      image: 'https://www.customelements.in/wp-content/uploads/2023/03/AXOR-Apex-Falcon-Gloss-Black-Red-Helmet-2-350x350.webp',
    },
    {
      id: 3,
      image: 'https://www.customelements.in/wp-content/uploads/2022/06/AXOR-Apex-Hunter-Gloss-Black-Fluorescent-Green-Full-Face-Helmet-2-350x350.webp',
    },
    {
      id: 4,
      image: 'https://www.customelements.in/wp-content/uploads/2021/02/AXOR-Apex-Hunter-Matt-Black-Red-Full-Face-Helmet-350x350.jpg',
    }
  ];

  const cardData_2 = [
    {
      id: 5,
      image: 'https://www.customelements.in/wp-content/uploads/2023/05/AXOR-Apex-Marvel-Venom-Gloss-Black-Red-Helmet-2-350x350.webp',
    },
    {
      id: 6,
      image: 'https://www.ahhelmets.in/c/902-medium_default/vega-helmets.jpg',
    },
    {
      id: 7,
      image: 'https://www.ahhelmets.in/9461-home_default/axor-jet-dull-battle-green-helmet.jpg',
    },
    {
      id: 8,
      image: 'https://www.ahhelmets.in/11232-home_default/apex-venomous-dv-dull-black-blue-helmet.jpg',
    }
  ];

  return (

    <>
    <div className="container">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-6 col-md-3">
            <Card className="card-hover">
              <Card.Img className="card-image" variant="top" src={card.image} /> 
              {/* <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body> */}
            </Card>
          </div>
        ))}
      </div>

      <div className="row mt-2">
        {cardData_2.map((card) => (
          <div key={card.id} className="col-6 col-md-3">
            <Card className="card-hover">
              <Card.Img className="card-image" variant="top" src={card.image} />
              {/* <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body> */}
            </Card>
          </div>
        ))}
      </div>
    </div>

       <Footer/>
    </>
  );
};

export default Helmet;