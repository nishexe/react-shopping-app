import { useLocation, useNavigate } from "react-router-dom";
const OrderPlaced = () => {
  const location = useLocation();
  const formData = location.state;
  const history = useNavigate();
  const goHome = () => {
    history(`/search/All`);
  };
  return (
    <div className="text-center">
      <h2>Order placed Successfully, {formData.name}</h2>
      <h2>Will deliver your products at your {formData.residence}</h2>
      <h2>Will Reach you out on {formData.mobile}</h2>
      <h2>{formData.address}</h2>
      <button onClick={goHome}>GO BACK TO HOME</button>
    </div>
  );
};
export default OrderPlaced;
