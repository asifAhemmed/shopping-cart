import { useState, useEffect } from "react";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({
    isLoading: false,
    message: "",
  });
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading((loading) => ({
          ...loading,
          isLoading: true,
          message: "Fetching Products...",
        }));
        if (selectedCategory) {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
          if (!response.ok) {
            throw new Error(
              `Fetching data failed: ${response.status}: ${response.statusText}`
            );
          }
          const data = await response.json();
          if (searchTerm) {
            const filteredData = data.filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProducts(filteredData);
          } else {
            setProducts(data);
          }
        } else {
          const response = await fetch("https://fakestoreapi.com/products");
          if (!response.ok) {
            throw new Error(
              `Fetching data failed: ${response.status}: ${response.statusText}`
            );
          }
          const data = await response.json();
          if (searchTerm) {
            const filteredData = data.filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProducts(filteredData);
          } else {
            setProducts(data);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading((loading) => ({
          ...loading,
          isLoading: false,
        }));
      }
    };

    fetchProducts();
  }, [selectedCategory, searchTerm]);

  return {
    products,
    setProducts,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  };
};

export default useProducts;
