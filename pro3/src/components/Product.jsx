import {useCallback, useContext}from 'react'
import '/src/css/Product.css';
import { useSelector,useDispatch } from 'react-redux';
import { add,remove } from '../slice/cart.js'


export const Product = ({item}) => {

      const cart = useSelector(state=>state.cartData);
      const dispatch = useDispatch();
      
      const addToCart=useCallback((item)=>{
        dispatch(add(item));
      },[dispatch]);

      const removeFromCart=useCallback((id)=>{
        dispatch(remove(id));
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
