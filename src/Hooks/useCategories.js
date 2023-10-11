import { useState, useEffect } from "react";
import axios from "axios";
const useCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setAllCategories(response.data);
    });
  }, []);
  return allCategories;
};
export default useCategories;
