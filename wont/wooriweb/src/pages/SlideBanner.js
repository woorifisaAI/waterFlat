import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slide-banner">
      <Slider {...settings}>
      <div className="slide-item" >
          <img 
          src="img/b3.jpg" alt="Slide 2"
          style={{ width: '1550px', height: '500px' }}
          className="slide-item"
          />
        </div>

      <div className="slide-item">
          <img 
          src="" alt="Slide 2" 
          style={{ width: '1535px', height: '500px' }}
          className="slide-item"
          />
        </div>

        <div>
          <img src="img/ci.jpg"  alt="Slide 3" 
          style={{ width: '1535px', height: '500px' }}
          className="slide-item"/>
        </div>
      </Slider>
    </div>
  );
};

export default SlideBanner;
