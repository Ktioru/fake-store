import "./App.scss";
import Product from "./components/Product";
import javascriptLogo from "./assets/javascript-logo.png";
import pythonLogo from "./assets/python-logo.png";
import unityLogo from "./assets/unity-logo.png";
import linuxLogo from "./assets/arch-linux-logo.png";

const Shop = () => {
  return (
    <div className="shop">
      <Product
        name={"Javascript"}
        logo={javascriptLogo}
        title={"Javascript Course for Beginners - Become a Front End Master"}
      />
      <Product
        name={"Python"}
        logo={pythonLogo}
        title={"Python Course for Beginners - Machine Learning"}
      />
      <Product
        name={"Unity"}
        logo={unityLogo}
        title={"Unity Course - Make the games of your dreams"}
      />
      <Product
        name={"Linux"}
        logo={linuxLogo}
        title={"Linux Course - The Ultimate Guide for Command Line"}
      />
    </div>
  );
};

export default Shop;
