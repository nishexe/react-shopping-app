import SearchResultsRow from "./SearchResultsRow";
import { useParams } from "react-router-dom";
const SearchResults = ({ allProducts }) => {
  const { category } = useParams();
  const categories = allProducts
    ? Array.from(new Set(allProducts.map((h) => h.category)))
    : [];
  categories.unshift("All");
  let availableCategories = Array.from(categories);
  if (availableCategories.indexOf(category) < 0) {
    return <h1 className="text-center">No Products Found For {category}</h1>;
  }
  const filteredProducts = allProducts.filter((h) => h.category === category);
  return (
    <div className="mt-2">
      <table className="table table-hover table-dark table-bordered">
        <th className="text-center">Sl.No</th>
        <th className="text-center">Image</th>
        <th className="text-center">Title</th>
        <th className="text-center">Category</th>
        <th className="text-center">Brand</th>
        <th className="text-center">Price</th>
        <th className="text-center">Discount %</th>
        <th className="text-center">Action</th>
        <tbody className="text-center">
          {filteredProducts.map((h) => (
            <SearchResultsRow key={h.id} product={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
