import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CartResultsRow from "./CartResultsRow";
import "./Cart.css";
const Cart = ({ allProducts }) => {
  const navigate = useNavigate();
  const [isChanged, setIsChanged] = useState(false);
  const [isPayBtnEnabled, setisPayBtnEnabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    residence: "",
  });
  useEffect(() => {
    const btnflag = Object.values(formData).every((item) => {
      return item !== "";
    });
    console.log(btnflag);
    setisPayBtnEnabled(btnflag);
  }, [formData]);
  const goHome = () => {
    navigate(`/search/All`);
  };
  const resetLocalStorage = () => {
    let productIds = localStorage.getItem("productIds");
    productIds = JSON.parse(productIds);
    for (let index = 0; index < productIds.length; index++) {
      localStorage.removeItem(productIds[index]);
    }
    localStorage.removeItem("productIds");
  };
  const onSubmitFieldsHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const orderPlaced = () => {
    resetLocalStorage();
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/orderplaced", { state: formData });
  };
  let cartItems = JSON.parse(localStorage.getItem("productIds"));
  cartItems = Array.from(new Set(cartItems));
  let allItems = [];
  for (let i = 0; i < cartItems.length; ++i) {
    allItems.push(allProducts[parseInt(cartItems[i]) - 1]);
  }
  let amount = 0;
  if (allItems[0] !== undefined) {
    for (let i = 0; i < allItems.length; ++i) {
      amount += allItems[i]["price"];
    }
  }
  let cgst = parseFloat(0.09 * amount).toFixed(2);
  let sgst = parseFloat(0.09 * amount).toFixed(2);
  let total = parseFloat(
    parseFloat(amount) + parseFloat(cgst) + parseFloat(sgst)
  ).toFixed(2);
  let productIds = localStorage.getItem("productIds");
  if (productIds !== null && productIds.length < 3) {
    localStorage.removeItem("productIds");
  }
  function onDeleteCallback(message) {
    if (message === "deleted") {
      setIsChanged((prev) => !prev);
    }
  }
  if (localStorage.getItem("productIds") === null) {
    return (
      <div className="text-center">
        <button className="back-to-home md-8" onClick={goHome}>
          Back To Home Page
        </button>
        <h1>NO ITEMS IN CART</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center">CART</h1>
      <div className="text-center">
        <button className="back-to-home md-8" onClick={goHome}>
          Back To Home Page
        </button>
      </div>
      <table className="table table-hover table-dark table-bordered">
        <th className="text-center">Title</th>
        <th className="text-center">Price</th>
        <th className="text-center">Quantity</th>
        <th className="text-center">Actions</th>
        <tbody className="text-center">
          {allItems.map((h) => (
            <CartResultsRow
              key={h.id}
              product={h}
              onDeleteCallback={onDeleteCallback}
            />
          ))}
        </tbody>
      </table>
      <div className="col-md-12 mt-4">
        <h3>User Details</h3>
        <div className="parent">
          <div className="inputFields">
            <h5>Name : </h5>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onSubmitFieldsHandler}
            />
            <h5>Mobile No. : </h5>
            <input
              type="text"
              name="mobile"
              id="mobile"
              onChange={onSubmitFieldsHandler}
            />
            <h5>Address : </h5>
            <input
              type="text"
              name="address"
              onChange={onSubmitFieldsHandler}
            />
            <h5>Residence Type : </h5>
            <input
              type="radio"
              id="home"
              name="residence"
              value="home"
              onChange={onSubmitFieldsHandler}
            />
            <label htmlFor="home">Home</label> <br />
            <input
              type="radio"
              id="office"
              name="residence"
              value="office"
              onChange={onSubmitFieldsHandler}
            />
            <label htmlFor="office">Office</label> <br />
          </div>
          <div className="amount-details">
            <h4>AMOUNT: ${amount}</h4> <h4>CGST(9%): ${cgst}</h4>
            <h4>SGST(9%): ${sgst}</h4> <h4>TOTAL: ${total}</h4> <h1></h1>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button onClick={orderPlaced} disabled={!isPayBtnEnabled}>
          Pay Now
        </button>
      </div>
    </div>
  );
};
export default Cart;
