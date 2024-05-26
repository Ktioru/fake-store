import { useState, useEffect } from "react";
import ProductInCart from "./components/ProductInCart";

const Cart = () => {
  const courses = JSON.parse(localStorage.getItem("Courses"));

  return (
    <div className="cart">
      {courses[0].inCart == true ? (
        <ProductInCart logo={courses[0].logo} title={courses[0].title} />
      ) : null}
      {courses[1].inCart == true ? (
        <ProductInCart logo={courses[1].logo} title={courses[1].title} />
      ) : null}
      {courses[2].inCart == true ? (
        <ProductInCart logo={courses[2].logo} title={courses[2].title} />
      ) : null}
      {courses[3].inCart == true ? (
        <ProductInCart logo={courses[3].logo} title={courses[3].title} />
      ) : null}
      <div className="total">
        <p className="totalText">TOTAL</p>
        <p className="totalPrice">$2 Billion</p>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <button>Payment</button>
      </a>
    </div>
  );
};

export default Cart;
