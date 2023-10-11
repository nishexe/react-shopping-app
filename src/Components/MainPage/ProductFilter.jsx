import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
const ProductFilter = ({ allProducts }) => {
  const history = useNavigate();
  const categories = allProducts
    ? Array.from(new Set(allProducts.map((h) => h.category)))
    : [];
  categories.unshift("All");
  let availableCategories = Array.from(categories);
  const allCategories = useCategories();
  for (let i = 0; i < allCategories.length; ++i) {
    if (availableCategories.indexOf(allCategories[i]) < 0) {
      categories.push(allCategories[i]);
    }
  }
  categories.sort();
  const onSearchChange = (e) => {
    const category = e.target.value;
    if (category === "All") {
      history(`/search/all`);
    }
    if (availableCategories.indexOf(e.target.value) < 0) {
    }
    history(`/search/${category}`);
  };
  const gotoCart = () => {
    history(`/cart`);
  };
  return (
    <div className="d-flex row mt-3 ">
      <div className="flex-fill col-md-2 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-fill offset-md-2 col-md-4 h1">Welcome User</div>
      <div className="flex-fill offset-md-0 col-md-1">
        <button onClick={gotoCart}>CART</button>
      </div>
      <hr></hr>
    </div>
  );
};
export default ProductFilter;
