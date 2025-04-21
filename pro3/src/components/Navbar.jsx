import react, { useContext, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import '/src/css/navbar.css';
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const cart = useSelector((state)=>state.cartData);
  const[cartTotal,setCartTotal] = useState(0);

  useEffect(()=>{
    setCartTotal(cart.length);
  },[cart])


  return (
    <>
    <nav>
        <Link to='/'>
         <div className="logo">
            <img src="src/assets/frizzy-logo2.png" alt="logo" />
          </div>  
         
        </Link>
        <div className="routes">
          
          <h3>search</h3>
          <h3>Sign in</h3>

          <Link to="/Cart">
         <div className="cart-icon">
         <h2>{cartTotal}</h2>
         <img src="src/assets/round-plate-nbg.png" />
          </div> 
          </Link>

        </div>
         
            
        
    </nav>
    </>
  )
}
