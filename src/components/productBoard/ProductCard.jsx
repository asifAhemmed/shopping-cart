/* eslint-disable react/prop-types */
import AddToCart from "./AddToCart";
import { useContext } from 'react';
import { CartContext } from '../../context/context';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [ toggleCart, setToggleCart ] = useState(false);
  const {cart, setCart} = useContext(CartContext);
  const handleAddToCart = () => {
    const isIncludes = cart.find((item) => item.id === product.id);
    if (isIncludes) {
      const filteredData = cart.filter((item) => item.id !== product.id);
      setCart(filteredData);
    } else {  
      setCart([...cart, product]);
    }
      
  }
  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={product.image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <AddToCart onAddRemoveFromCart={handleAddToCart} toggleCart={toggleCart} onToggleCart={setToggleCart} />
    </div>
  );
};

export default ProductCard;
