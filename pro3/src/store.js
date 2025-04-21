import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from './slice/cart.js'

const store = configureStore({
  reducer:{
    cartData : cartSlice,
  }
});

export default store;