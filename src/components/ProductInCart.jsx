import "../App.scss";

const ProductInCart = ({ name, title, price = 49.99, logo }) => {
  return (
    <div className="productInCart">
      <div className="buy">
        <img src={logo} />
        <p>{title}</p>
      </div>
      <p className="price">${price}</p>
    </div>
  );
};

export default ProductInCart;
