import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Hero() {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* leftside */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quo
            repudiandae, nemo, numquam enim,
          </span>
        </div>
      </div>
      {/* middleside */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "9rem" }}
          whileInView={{ bottom: "7rem" }}
          className={css.bluecircle}
          transition={transition}
        ></motion.div>
        <motion.img
          initial={{ bottom: "5rem" }}
          whileInView={{ bottom: "7rem" }}
          src={HeroImg}
          alt="hero"
          width={600}
          transition={transition}
        />

        <motion.div
          initial={{ right: "2%" }}
          whileInView={{ right: "-5%" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>best signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* rightside */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5 m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Customers</span>
        </div>
      </div>
    </div>
  );
}
