import {  ProductContext } from "../../context/context";
import { useContext } from 'react';

const SortingOptions = () => {
  const { products,setProducts } = useContext(ProductContext);
  const handleSort = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })
    setProducts(sortedProducts);
  };
  return (
    <div
      className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        <span
          onClick={() => handleSort("asc")}
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          Low to High
        </span>
        <span
          onClick={() => handleSort("desc")}
          href=""
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          High to Low
        </span>
      </div>
    </div>
  );
};

export default SortingOptions;
