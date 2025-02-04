import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShieldPlus } from "lucide-react";
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const {loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">CureCipher <ShieldPlus size={28} className="feature-icon" /></Link>
      </div>
      <div className="side">
        <Link to="/features">Features</Link>
        <Link to="/sephina">Sephina</Link>
        <Link to="/hospitalsnearby">Hospitals Nearby</Link>
        {
          isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
          ) : (
            
            <button onClick={loginWithRedirect}>Log in</button>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
