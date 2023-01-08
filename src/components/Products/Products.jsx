import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our featured products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Skin Care</li>
          <li>Conditioners</li>
          <li>Foundations</li>
        </ul>
        <div className={css.list}>
          {MenuProducts.map((products, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{products.name}</span>
                  <span>{products.detail}</span>
                </div>
                <span>{products.price}$</span>
                <div>shop now</div>
              </div>
              <img src={products.img} alt={products.name} className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
