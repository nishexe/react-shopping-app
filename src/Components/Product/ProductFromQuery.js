import { useParams } from "react-router-dom";
import Product from "./Product";
const ProductFromQuery = ({ allProducts }) => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  if (!product) return <div>Product Not Found</div>;
  return <Product product={product}></Product>;
};
export default ProductFromQuery;
