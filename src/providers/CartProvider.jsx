/* eslint-disable react/prop-types */

import { CartContext } from "../context/context";
import { useState } from 'react';


const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);
   

    return (
        <CartContext.Provider value={{cart, setCart}}>
            { children }
        </CartContext.Provider>
    );
};

export default CartProvider;