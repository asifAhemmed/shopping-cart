
import Cart from "./Cart";
import Filter from "./Filter";
import ProductCards from "./ProductCards";
import SearchBar from "./SearchBar";
import Sort from "./Sort";

const ProductBoard = () => {
   
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <Sort />

              <Filter />
            </div>

            <div className="flex gap-2 items-center">
              <SearchBar />
              <Cart />
            </div>
          </div>
        </div>

        <div>
          <ProductCards />
        </div>
      </div>
    </div>
  );
};

export default ProductBoard;
