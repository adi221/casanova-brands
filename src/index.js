import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StaffProvider from './context/staff_context';
import ProductsProvider from './context/products_context';
import CartProvider from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';

// dev--c47e5pp.us.auth0.com
// MfbGGwVNfeLWW55PdanvOMKH8eSrNrMH

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <StaffProvider>
              <App />
            </StaffProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
