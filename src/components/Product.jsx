import { Link } from "react-router-dom";
import "../App.scss";

const Product = ({ title, logo }) => {
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
        <p className="price">$49.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
