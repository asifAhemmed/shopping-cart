import { ProductContext } from "../../context/context";
import { useProductCategory } from "../../hooks";
import { useContext } from 'react';


const FilterOptions = () => {
  const { categories, loading } = useProductCategory();
  const { selectedCategory,setSelectedCategory } = useContext(ProductContext);
  return (
    <div
      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabIndex="-1"
      id="filter-dropdown"
    >
      {loading.isLoading ? (
        <div className="p-2">
          <p className="text-center">{loading.message} </p>
        </div>
      ) : (
        <div className="py-1" role="none">
          {categories.map((category) => (
            <label
              key={category}
              className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
            >
              <input
                onChange={(e) =>{
                  if(e.target.checked){
                    setSelectedCategory(category)
                  }
                  else{
                    setSelectedCategory('')
                  }
                }}
                checked={selectedCategory === category}
                type="checkbox"
                className="form-checkbox h-4 w-4"
                id="filter-option-1"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
