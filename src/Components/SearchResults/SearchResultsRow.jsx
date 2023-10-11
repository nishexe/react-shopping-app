import { useNavigate } from "react-router-dom";
import "./searchResultsRow.css";
import { useState, useEffect } from "react";
const SearchResultsRow = ({ product }) => {
  const history = useNavigate();
  const [showBuyButton, setShowBuyButton] = useState();
  const setActive = () => {
    history(`/product/${product.id}`);
  };
  useEffect(() => {
    let storedProduct = localStorage.getItem(product.id);
    if (storedProduct) {
      setShowBuyButton(false);
    } else {
      setShowBuyButton(true);
    }
  });
  const addToCart = () => {
    let storedProducts = localStorage.getItem("productIds");
    if (!storedProducts) {
      storedProducts = [product.id];
    } else {
      storedProducts = JSON.parse(storedProducts);
      storedProducts.push(product.id);
      storedProducts.sort();
    }
    localStorage.setItem("productIds", JSON.stringify(storedProducts));
    localStorage.setItem(product.id, 1);
    setShowBuyButton(false);
  };
  function removeElementFromArray(arr, elementToRemove) {
    const index = arr.indexOf(elementToRemove);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  const removeFromCart = () => {
    let storedProducts = localStorage.getItem("productIds");
    if (!storedProducts) {
      storedProducts = [product.id];
    } else {
      storedProducts = JSON.parse(storedProducts);
      storedProducts = removeElementFromArray(storedProducts, product.id);
      console.log(storedProducts);
    }
    localStorage.setItem("productIds", JSON.stringify(storedProducts));
    localStorage.removeItem(product.id);
    setShowBuyButton(true);
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>
        <img
          className="thumbnail-img"
          src={product.thumbnail}
          alt="product thumbnail"
          onClick={setActive}
        />
      </td>
      <td>{product.title}</td> <td>{product.category}</td>
      <td>{product.brand}</td> <td>${product.price}</td>
      <td>{product.discountPercentage}%</td>
      <td>
        <div className="flex-fill text-center">
          {showBuyButton ? (
            <button id="buy" onClick={addToCart}>
              BUY
            </button>
          ) : (
            <button id="cancel" onClick={removeFromCart}>
              CANCEL
            </button>
          )}
          <span> </span> <button onClick={setActive}>VIEW</button>
        </div>
      </td>
    </tr>
  );
};
export default SearchResultsRow;
