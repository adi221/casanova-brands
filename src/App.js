import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import pages
import Home from './pages/Home';
import Staff from './pages/Staff';
import About from './pages/About';
import Error from './pages/Error';
import SinglePerson from './pages/SinglePerson';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';
// Import components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/HomeUI/Footer';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/staff'>
            <Staff />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/products/:id'>
            <SingleProduct />
          </Route>
          <Route exact path='/person/:id'>
            <SinglePerson />
          </Route>
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
