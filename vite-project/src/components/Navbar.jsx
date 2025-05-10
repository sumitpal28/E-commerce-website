import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        
            <h1 className='heading'>E Commerce</h1>
        <ul>
        <Link to="/" className='nounder'>
          <li>Home</li>
        </Link>
        <Link to="/product" className='nounder'>
          <li>Product</li>
        </Link>
        <Link to="/cart" className='nounder'>
          <li>Cart</li>
        </Link>
      </ul>
    </div>
    
  );
};

export default Navbar;
