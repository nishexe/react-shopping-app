import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "../SearchResults/Table";
import ProductFilter from "./ProductFilter";
import useProducts from "../../Hooks/useProducts";
import ProductFromQuery from "../Product/ProductFromQuery";
import Cart from "../../Components/Cart/Cart";
import OrderPlaced from "../../Components/OrderPlaced/OrderPlaced";
import AllProducts from "./AllProducts";
import { Navigate } from "react-router-dom";
function App() {
  const allProducts = useProducts();
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/search/:category"
            element={
              <>
                <ProductFilter allProducts={allProducts} />{" "}
                <SearchResults allProducts={allProducts} />{" "}
              </>
            }
          ></Route>
          <Route
            exact
            path="/product/:id"
            element={<ProductFromQuery allProducts={allProducts} />}
          ></Route>
          <Route
            exact
            path="/cart"
            element={<Cart allProducts={allProducts} />}
          ></Route>
          <Route exact path="/orderplaced" element={<OrderPlaced />}></Route>
          <Route
            exact
            path="/search/All"
            element={
              <>
                <ProductFilter allProducts={allProducts} />
                <AllProducts allProducts={allProducts} />
              </>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/search/All" />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
