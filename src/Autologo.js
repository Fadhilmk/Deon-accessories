import React, { useState, useEffect } from 'react';
import './autologo.css';

import logo1 from '../src/assets/autologo/log3.jpg';
import logo2 from '../src/assets/autologo/log2.jpg';
import logo3 from '../src/assets/autologo/log4.jpg';
import logo4 from '../src/assets/autologo/log1.jpg';
import logo5 from '../src/assets/autologo/logo5.png';
import logo6 from '../src/assets/autologo/log7.png';
// import { Container ,Row,Col} from 'react-bootstrap';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const updateVisibleSlides = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setVisibleSlides(1); // Show only 1 slide on small screens
    } else if (screenWidth < 992) {
      setVisibleSlides(2); // Show 2 slides on medium screens
    } else {
      setVisibleSlides(3); // Show 3 slides on larger screens
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);

    const autoLoop = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
    }, 1000);

    return () => {
      clearInterval(autoLoop);
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, []);

  const slides = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    // <Container fluid>
    //   <Row>
    //     <Col md={12} >
        <div className="slider-container ">
      <div className="slide-track">
        {[...Array(2)].map((_, i) =>
          slides.map((logo, index) => (
            <div
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              key={`${i}-${index}`}
              style={{ flexBasis: `${100 / visibleSlides}%` }}
            >
              <img src={logo} height="100" width="250" alt="slide" />
            </div>
          ))
        )}
      </div>
    </div>
    //     </Col>
    //   </Row>
    // </Container>
    
   
  );
};

export default Slider;
