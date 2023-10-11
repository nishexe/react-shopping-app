import { useState, useEffect } from "react";
import axios from "axios";
const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((respone) => {
      setAllProducts(respone.data.products);
    });
  }, []);
  return allProducts;
};
export default useProducts;
