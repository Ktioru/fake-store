import { Link } from "react-router-dom";
import "./App.scss";
import image from "./assets/image2.png";

const AboutUs = () => {
  return (
    <div className="homePage">
      <div className="imageBox">
        <img src={image} alt="" />
      </div>
      <div className="textBox">
        <h2 className="title">This store is not real!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
          quam pellentesque nec nam aliquam sem. Tellus molestie nunc non
          blandit massa enim nec dui nunc. This image was made by Freepik.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
