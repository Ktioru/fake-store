import { useEffect } from "react";
import { Outlet, Link, json } from "react-router-dom";
import javascriptLogo from "./assets/javascript-logo.png";
import pythonLogo from "./assets/python-logo.png";
import unityLogo from "./assets/unity-logo.png";
import linuxLogo from "./assets/arch-linux-logo.png";
import "./App.scss";

function App() {
  const courses = [
    {
      title: "Javascript Course for Beginners - Become a Front End Master",
      name: "Javascript",
      logo: javascriptLogo,
      inCart: false,
    },
    {
      title: "Python Course for Beginners - Machine Learning",
      name: "Python",
      logo: pythonLogo,
      inCart: false,
    },
    {
      title: "Unity Course - Make the games of your dreams",
      name: "Unity",
      logo: unityLogo,
      inCart: false,
    },
    {
      title: "Linux Course - The Ultimate Guide for Command Line",
      name: "Linux",
      logo: linuxLogo,
      inCart: false,
    },
  ];
  useEffect(() => {
    if (localStorage.length == 0) {
      localStorage.setItem("Courses", JSON.stringify(courses));
    }
  }, []);
  return (
    <div className="body">
      <header>
        <h2>
          Programming Courses made by{" "}
          <a href="https://github.com/Ktioru" target="_blank">
            Ktioru
          </a>
        </h2>
        <nav>
          <div className="page">
            <Link to={"/Home"}>
              <p className="page-text">Home</p>
            </Link>
          </div>
          <div className="page">
            <Link to={"/Shop"}>
              <p className="page-text">Shop</p>
            </Link>
          </div>
          <div className="page">
            <Link to={"/Cart"}>
              <p className="page-text">Cart</p>
            </Link>
          </div>
          <div className="page">
            <Link to={"/AboutUs"}>
              <p className="page-text">About Us</p>
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
