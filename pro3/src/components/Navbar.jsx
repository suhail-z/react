import react from 'react';
import {Link} from "react-router-dom";
import '/src/css/navbar.css'
export const Navbar = () => {
  return (
    <>
    <nav>
        <h2>
            Frizzy
        </h2>
        <ul>
           <li> <Link to="/">Home</Link></li>
           <li><Link to="/Cart">Cart</Link></li> 
            <li></li><Link to="/Product">product</Link>
        </ul>
    </nav>
    </>
  )
}
