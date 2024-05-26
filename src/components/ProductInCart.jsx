import "../App.scss";
import javascriptLogo from "../assets/javascript-logo.png";
import pythonLogo from "../assets/python-logo.png";
import unityLogo from "../assets/unity-logo.png";
import linuxLogo from "../assets/arch-linux-logo.png";
import { useEffect, usestate } from "react";

const ProductInCart = (name, title, price = 49.99) => {
  const [logoPath, setLogoPath] = "";

  if (name == "Javascript") {
    setLogoPath(javascriptLogo);
  } else if (name == "Python") {
    setLogoPath(pythonLogo);
  } else if (name == "Unity") {
    setLogoPath(unityLogo);
  } else if (name == "Linux") {
    setLogoPath(linuxLogo);
  }

  return (
    <div className="productInCart">
      <img src="../assets/python-logo.png" alt="Arch Linux Logo" />
    </div>
  );
};

export default ProductInCart;
