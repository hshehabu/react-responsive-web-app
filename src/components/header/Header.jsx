import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="amazon logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bar} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul
          className={css.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="search" className={css.search} placeholder="Search" />
        <AiOutlineShoppingCart className={css.cart} />
      </div>
    </div>
  );
};
export default Header;
