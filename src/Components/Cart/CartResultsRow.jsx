import { Navigate } from "react-router-dom";
import "./Cart.css";
import { useState } from "react";
const CartResultsRow = ({ product, onDeleteCallback }) => {
  function removeElementFromArray(arr, elementToRemove) {
    const index = arr.indexOf(elementToRemove);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  const deleteItem = () => {
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
    onDeleteCallback("deleted");
    if (localStorage.getItem("productIds").length < 3) {
      localStorage.removeItem("productIds");
      <Navigate to="/cart" />;
    }
  };
  const [quantity, setQuantity] = useState(1);
  localStorage.setItem(product.id, quantity);
  const [price] = useState(product.price);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    localStorage.setItem(product.id, quantity);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      localStorage.setItem(product.id, quantity);
    }
  };
  return (
    <tr>
      
      <td>{product.title}</td> <td>${price}</td> <td>{quantity}</td>
      <td>
        
        <div className="flex-fill text-center">
          
          <button className="quantity-button" onClick={increaseQuantity}>
            
            +
          </button>
          <span> </span>
          <button className="quantity-button" onClick={decreaseQuantity}>
            
            -
          </button>
          <span> </span>
          <button className="quantity-button" onClick={deleteItem}>
            
            DELETE
          </button>
        </div>
      </td>
    </tr>
  );
};
export default CartResultsRow;
