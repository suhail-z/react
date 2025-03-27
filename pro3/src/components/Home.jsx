import React, { useContext, useEffect, useState } from 'react';
import {products} from '/src/components/products.js';
import {Product} from '/src/components/Product.jsx';
import '/src/css/home.css';

export const Home = () => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems(products);
    },[])

  return (
    <>
    <div className="product-grid">
{
    items.map(item=>(
         <Product key={item.id} item={item}/>
    ))
}</div>
   
    </>
  )
}
