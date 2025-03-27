import {useCallback, useContext}from 'react'
import '/src/css/Product.css';
import { cartContext } from '../App';


export const Product = ({item}) => {

      const {cart,dispatch} = useContext(cartContext);
      
      const addToCart=useCallback((item)=>{
        dispatch({type:'add',payload:{item}});
      },[dispatch]);

      const removeFromCart=useCallback((id)=>{
        dispatch({type:'remove',payload:{id}})
      },[dispatch])

  return (
    <>
    <div className="product-container">
      <div className="image">
        <img src={item.image_url} alt={item.name+'img'} />
      </div>
      <div className="details">
        <h3>{item.name.length > 20 ? item.name.substring(0,20)+"..":item.name}</h3>
        <h4>{` ₹ `+item.amount+'.00'}</h4>
        <h4 className='category'>{item.category}</h4>
        <h4 className="shop">{'By '+item.restaurant }</h4>
      </div>
      {
        cart.some(cartItem=> cartItem.id === item.id) ? (<button className="remove" onClick={()=>{removeFromCart(item.id)}}>Remove</button> ):(
        <button className="add" onClick={()=>{addToCart(item)}}>ADD</button>)
      }
      
    </div>
    </>
  )
}
