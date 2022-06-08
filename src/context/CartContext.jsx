import React, { createContext,useState } from "react";
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {


  const[cart,setCart]=useState([]);
  const[length,setLength]=useState(cart.length);

  const addCart=async(product)=>{
        let r=await axios.post("http://localhost:8080/cartItems",{
          ...product
        })
        setCart(r.data);   
    }
    const getData=async()=>{
        let r=await axios.get("http://localhost:8080/cartItems");
        setCart(r.data);   
        setLength(cart.length);
    }
  const removeCart=async(id)=>{
      let r=await axios.delete(`http://localhost:8080/cartItems`,{
        id:id
      });
      console.log(r.data);
        setCart(r.data);
  }

  return (
    <CartContext.Provider value={{cart,addCart,getData,setCart,removeCart,length}}>
    {children}
    </CartContext.Provider>
  )

};