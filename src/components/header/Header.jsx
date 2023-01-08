import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="amazon logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="search" className={css.search} placeholder="Search" />
        <AiOutlineShoppingCart className={css.cart} />
      </div>
    </div>
  );
};
export default Header;