import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(  // Use render method from root
  <Auth0Provider
        domain="dev-4xgg2n6q5ic82lk3.us.auth0.com"
        clientId="zoX4JjxcBeIV4OoiEsqjjSZqLl15zqFk"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
  <BrowserRouter>  {/* BrowserRouter is used for routing */}
    <App />
  </BrowserRouter>
  </Auth0Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
