import React, { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { initialState } from "../reducers/StoreReducer";
import Reducer from "../reducers/StoreReducer";

//step:1 creating cart context (store)

export let CartContext = createContext();

//step:2 creating the cart provider

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //useEffect for handling cart functionality -addding and removing the items to local storage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    return () => {
      //cleanup
    };
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

//creating the custom Hook to avoid the Repaeated logic

export const useCart = () => {
  return useContext(CartContext);
};
