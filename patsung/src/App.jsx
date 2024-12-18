import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './CartContext';
import Layout from './layout/Layout';
import { Home } from './pages/home/Home';
import CheckoutPage from './checkout/CheckoutPage';


export const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<CheckoutPage />} />


          </Routes>
        </Layout>
      </Router>
      </CartProvider>
  );
};

export default App;