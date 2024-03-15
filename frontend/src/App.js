import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Addtocart/Cart';
import Cart2 from './Addtocart/Cart2';
import {CartProvider} from "react-use-cart"
const App = () => {
  return (
    <>
     
           <CartProvider>
            <Cart/>
           <Cart2/>
           </CartProvider>
    </>
  );
};

export default App;   