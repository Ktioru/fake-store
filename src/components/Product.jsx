import { Link } from "react-router-dom";
import "../App.scss";

const Product = ({ name, title, logo, price = 49.99 }) => {
  function Cart() {
    const course = JSON.parse(localStorage.getItem(name));
    if (course.inCart == false) {
      course.inCart = true;
      localStorage.setItem(name, JSON.stringify(course));
    } else if (course.inCart == true) {
      course.inCart = false;
      localStorage.setItem(name, JSON.stringify(course));
    }
  }
  return (
    <div className="product">
      <div className="course">
        <img src={logo} alt="" className="logo" />
        <p className="title">{title}</p>
      </div>

      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="buy">
        <p className="price">${price}</p>
        <button onClick={Cart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
