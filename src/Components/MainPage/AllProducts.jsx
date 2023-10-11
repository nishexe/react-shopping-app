import SearchResultsRow from "../../Components/SearchResults/SearchResultsRow";
const AllProducts = ({ allProducts }) => {
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
          {allProducts.map((h) => (
            <SearchResultsRow key={h.id} product={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllProducts;
