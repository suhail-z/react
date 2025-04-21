import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    add(state,action){
      return [...state,{...action.payload,quantity:1}];
    },
    remove(state,action){
       return state.filter(cartItem=>cartItem.id !== action.payload);
    },
    update(state,action){
     return state.map(cartItem=> cartItem.id === action.payload.id? {...cartItem,quantity:action.payload.quantity}:cartItem)
    }
  }
});

export const  { add , remove , update } = cartSlice.actions;

export default cartSlice.reducer;