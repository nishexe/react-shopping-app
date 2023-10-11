import "./Product.css";
import { useNavigate } from "react-router-dom";
const Product = ({ product }) => {
  const history = useNavigate();
  const goBack = () => {
    history(`/search/${product.category}`);
  };
  const gotoCart = () => {
    let storedProducts = localStorage.getItem("productIds");
    if (!storedProducts) {
      storedProducts = [product.id];
    } else {
      storedProducts = JSON.parse(storedProducts);
      storedProducts.push(product.id);
      storedProducts.sort();
    }
    localStorage.setItem("productIds", JSON.stringify(storedProducts));
    history(`/cart/`);
  };
  return (
    <div className="text-center">
      <button onClick={goBack}>Go Back</button>
      <div className="row mt-4">
        <h2 className="text-center">DETAILS</h2>
        <div className="max-width-60">
          <img src={product.thumbnail} alt="product thumbnail"></img>
        </div>
        <h2 className="col-md-12 mt-4 text-color-coral">
          <span className="titleBold">Title: </span> {product.title}
        </h2>
        <p className="price">
          <span className="titleBold">Description: </span> {product.description}
        </p>
        <p className="price">
          <span className="titleBold">Brand: </span> {product.brand}
        </p>
        <p className="price">
          <span className="titleBold">Category: </span> {product.category}
        </p>
        <p className="price">
          <span className="titleBold">Discount %: </span>
          {product.discountPercentage}
        </p>
        <p className="price">
          <span className="titleBold">Rating: </span> {product.rating}
        </p>
      </div>
      <button onClick={gotoCart}>Buy Product</button>
    </div>
  );
};
export default Product;
