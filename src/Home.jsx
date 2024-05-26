import { Link } from "react-router-dom";
import "./App.scss";

const Home = () => {
  return (
    <div className="homePage">
      <div className="textBox">
        <h2 className="title">
          We have the best programming courses on the market!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
          quam pellentesque nec nam aliquam sem. Tellus molestie nunc non
          blandit massa enim nec dui nunc.
        </p>
        <Link to={"/Shop"}>
          <button>Meet our courses</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
