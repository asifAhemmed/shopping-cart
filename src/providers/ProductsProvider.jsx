/* eslint-disable react/prop-types */
import { ProductContext } from "../context/context";
import { useProducts } from "../hooks";


const ProductsProvider = ({children}) => {
    const { products,setProducts, loading, error,selectedCategory,setSelectedCategory,searchTerm,setSearchTerm} = useProducts();
    return (
        <ProductContext.Provider value={{products,setProducts, loading, error,selectedCategory,setSelectedCategory,searchTerm,setSearchTerm} }>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductsProvider;