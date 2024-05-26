import "./App.scss";
import Product from "./components/Product";
import logo from "./assets/javascript-logo.png";

const Shop = () => {
  return (
    <div className="shop">
      <Product
        logo={logo}
        title={"Javascript Course for Beginners - Become a Front End Master"}
      />
      <Product
        logo={logo}
        title={"Javascript Course for Beginners - Become a Front End Master"}
      />
      <Product
        logo={logo}
        title={"Javascript Course for Beginners - Become a Front End Master"}
      />
      <Product
        logo={logo}
        title={"Javascript Course for Beginners - Become a Front End Master"}
      />
    </div>
  );
};

export default Shop;
