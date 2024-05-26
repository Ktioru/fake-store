import { useEffect } from "react";
import ProductInCart from "./components/ProductInCart";
import "./App.scss";

const Cart = () => {
  const courses = JSON.parse(localStorage.getItem("Courses"));
  return (
    <div className="cart">
      <ProductInCart name="Javascript" />
      <p>{courses[0].name}</p>
    </div>
  );
};

export default Cart;
