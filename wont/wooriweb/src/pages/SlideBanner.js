import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideBanner.css';


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
        <div className="slide-image">
          <img
            src="img/b1.png"
            alt="Slide 2"
            className="center-image"
          />
        </div>

        <div className="slide-item">
          <img
            src="img/b2.png"
            alt="Slide 2"
            className="center-image"
          />
        </div>

        <div>
          <img
            src="img/ci.jpg"
            alt="Slide 3"
            className="center-image"
          />
        </div>
      </Slider>

    </div>
  );
};

export default SlideBanner;
