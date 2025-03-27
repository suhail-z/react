import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Product } from "./components/Product"
import { Navbar } from "./components/Navbar";
import { createContext, useEffect, useReducer } from "react";

function reducer(cart,action){
  switch(action.type){
    case 'add':
      return [...cart,{...action.payload.item,quantity:1}];
    case 'remove':
      return cart.filter(item=>item.id!==action.payload.id);
    case 'update':
      return cart.map(item=> item.id === action.payload.id ? {...item,quantity:action.payload.quantity}:item)
    default:
      return cart;
  }
}

export const cartContext = createContext();
 const App = () => {

  const [cart,dispatch] = useReducer(reducer,[],init);

  function init(){
    return JSON.parse(localStorage.getItem('cart'))||[];
  };
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

  return (
    <cartContext.Provider value={{cart,dispatch}}>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </cartContext.Provider>
    
    
  )
}
export default App;