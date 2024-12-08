import ProductCard from "./ProductCard";
import { ProductContext } from "../../context/context";
import { useContext } from "react";

const ProductCards = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {loading.isLoading ? (
          <div className="flex  items-center justify-center border rounded-md bg-gray-500 p-4 w-1/2 mx-auto">
            <p className="text-center text-white text-3xl">
              {loading.message}{" "}
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
