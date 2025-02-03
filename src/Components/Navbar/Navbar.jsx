import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
          <Link to="/"> 
            CureCipher
          </Link>
        </div>
          <div className='side'>
            <Link to="/#features"> 
              Features
            </Link>
            <Link to="/#sephina">
              Sephina
            </Link>
            <Link to="/#hospitals-nearby">
              Hospitals Nearby
            </Link>
            <button> Login </button>
        
          </div>
    </div>
  );
};
