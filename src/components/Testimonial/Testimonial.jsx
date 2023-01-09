import React from "react";
import css from "./Testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Spedily say has suitable disposal and boy. Excercise joy man
            children rejoiced.
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className={css.container}>
          <span>100K</span>
          <span>Happy customers with us</span>
        </div>
      </div>
      <div className={css.review}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          className={css.carousel2}
        >
          {TestimonialsData.map((data, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={data.image} alt="" />
                <span>{data.comment}</span>
                <hr />
                <span>{data.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
