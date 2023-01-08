import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

import { SliderProducts } from "../../data/products";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slides, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slides.name}</span>
                <span>{slides.detail}</span>
              </div>
              <span>{slides.price}$</span>
              <div>shop now</div>
            </div>
            <img src={slides.img} alt={slides.name} className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
