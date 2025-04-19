import React, { useContext, useEffect, useState } from 'react';
import {cartContext} from '../App';
import '../css/cart.css'

export const Cart = () => {
  const {cart,dispatch} = useContext(cartContext);
  console.log(cart);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+(curr.amount*curr.quantity),0))
  },[cart])

  function updateCart(id,quantity){
    dispatch({type:'update',payload:{id,quantity}})
  }
  function removeFromCart(id){
    dispatch({type:'remove',payload:{id}})
  }
  
  return (
    <div className="cart-display">
      {
        cart.length !== 0 ? (<>
         <h2>{'Total : ₹ '+total+'.00'}</h2>
    {
      cart.map(item=>(   
    <div key={item.id} className='cart-item'>
      <div className="details">
        <h3>{item.name}</h3>
        <h3>{` ₹ `+item.amount+'.00'}</h3>
        <h4>15-25 Mins</h4>
     </div>

        <div className="details-2">
        <div className="quantity">
      <h4>{'Quantity : '+item.quantity}</h4>
      <select name="quantity" id="" value={item.quantity} onChange={e=>{
        updateCart(item.id,e.target.value);
      }}>
        {
          [...Array(9).keys()].map(i=>(
            <option key={i+1} value={i+1}>{i+1}</option>
          ))
        }
      </select>
     </div>
    <button className="rmv" onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>

     <div className="image">
        <img className='cart-img' src={item.image_url}/>
        
     </div>
  </div>
      ))
    }
    <button className="checkout">CheckOut</button> 
        </>
        
        ) :(<p>No items in the cart , Add items to continue </p>)
      }
    
    </div>
    
  )
}
