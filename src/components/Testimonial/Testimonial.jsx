import React from "react";
import css from "./Testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
const Testimonial = () => {
  return (
    <div className={css.testimonial}>
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
    </div>
  );
};

export default Testimonial;
