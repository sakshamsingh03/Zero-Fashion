import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getdefaultcart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState(getdefaultcart());
    console.log(cartItems);

    const addToCart = (itemId,count) =>{
        console.log("counter", count);
        setCartItems((prev)=>({...prev,[itemId]:count}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-prev[itemId]}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalAmount += itemInfo.new_price * cartItems[item];
            }
          }
        }
        console.log("total", totalAmount);
        return totalAmount;
      }

      const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            totalItem += cartItems[item];
          }
        }
        return totalItem;
      };
      

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;