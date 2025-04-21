import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Product } from "./components/Product"
import { Navbar } from "./components/Navbar";
import {  useEffect } from "react";
import { useSelector  } from "react-redux";

// function reducer(cart,action){
//   switch(action.type){
//     case 'add':
//       return [...cart,{...action.payload.item,quantity:1}];
//     case 'remove':
//       return cart.filter(item=>item.id!==action.payload.id);
//     case 'update':
//       return cart.map(item=> item.id === action.payload.id ? {...item,quantity:action.payload.quantity}:item)
//     default:
//       return cart;
//   }
// }

// export const cartContext = createContext();
 const App = () => {
  const cart = useSelector((state)=>state.cartData); 
  // const [cart,dispatch] = useReducer(reducer,[],init);

  // function init(){
  //   return JSON.parse(localStorage.getItem('cart'))||[];
  // };
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
    
  )
}
export default App;