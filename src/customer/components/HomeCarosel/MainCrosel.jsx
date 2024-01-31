import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from "./MainCaroselData";


const HomeCarousel = () => {

  const item = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      alt=""
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  );
};

export default HomeCarousel;
