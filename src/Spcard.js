import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Newarrivalcard from './Components/Newarrivalcard';
import helmet1 from '../src/assets/newarrivals/helmet1.jpg';
import helmet2 from '../src/assets/newarrivals/helmet2.jpg';
import helmet3 from '../src/assets/newarrivals/helmet3.jpg';
import helmet4 from '../src/assets/newarrivals/helmet4.jpg';
import helmet5 from '../src/assets/newarrivals/helmet5.jpg';
import helmet6 from '../src/assets/newarrivals/helmet6.jpg';
import helmet7 from '../src/assets/newarrivals/helmet7.jpg';
import helmet8 from '../src/assets/newarrivals/helmet8.jpg';
import helmet9 from '../src/assets/newarrivals/helmet9.jpg';
import helmet10 from '../src/assets/newarrivals/helmet10.jpg';

// Import Swiper styles
import 'swiper/css';

function Spcard() {
  const goPrev = () => {
    if (typeof window !== 'undefined' && window.swiper) {
      window.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (typeof window !== 'undefined' && window.swiper) {
      window.swiper.slideNext();
    }
  };

  return (
    <div className="container py-4 px-4 justify-content-center">
      <h1 style={{ textAlign: 'center', color: 'white' }}>NEW ARRIVALS</h1>
      {/* <span style={{ textAlign: 'center', color: 'white' }} >NEW ARRIVALS</span> */}
      <Swiper
        loop={true}
        freeMode={true}
        grabCursor={true}
        className="myswiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => {
          window.swiper = swiper;
        }}
      >
       <div className="swiper-button-prev" onClick={goPrev} />
        <div className="swiper-button-next" onClick={goNext} />

        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet1 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet2 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet3 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet4 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet6 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet7 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet8 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet9 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Newarrivalcard data={{ imgSrc: helmet10 }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Spcard;
