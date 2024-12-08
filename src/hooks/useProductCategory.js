import { useState } from 'react';
import { useEffect } from 'react';
const useProductCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState({
        isLoading: false,
        message: "",
    })
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchProductCategory = async () => {
            try {
                setLoading(loading => ({
                    ...loading,
                    isLoading: true,
                    message: "Fetching Product Categories...",
                }))
                const response = await fetch('https://fakestoreapi.com/products/categories');
                if (!response.ok) {
                    throw new Error(`Fetching data failed: ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(loading => ({
                    ...loading,
                    isLoading: false,
                }))
            }
        }
        fetchProductCategory();
    },[]);

    return {
        categories,
        loading,
        error
    }
}

export default useProductCategory;