import { useEffect, useState } from "react";
import "../App.scss";

const Product = ({ name, title, logo, price = 49.99 }) => {
  const [action, SetAction] = useState("Add to");

  function Cart() {
    const courses = JSON.parse(localStorage.getItem("Courses"));

    courses.forEach((course) => {
      if (course.name == name) {
        if (course.inCart == false) {
          course.inCart = true;
          SetAction("Remove from");
        } else if (course.inCart == true) {
          course.inCart = false;
          SetAction("Add to");
        }
        localStorage.setItem("Courses", JSON.stringify(courses));
      }
    });
  }
  useEffect(() => {
    let word = "";
    const courses = JSON.parse(localStorage.getItem("Courses"));
    courses.forEach((course) => {
      if (course.name == name) {
        if (course.inCart == false) {
          word = "Add to";
        } else if (course.inCart == true) {
          word = "Remove from";
        }
        SetAction(word);
      }
    });
  }, []);
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
        <button onClick={Cart}>{action} Cart</button>
      </div>
    </div>
  );
};

export default Product;
