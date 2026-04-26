import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import MainLayout from './components/layout/MainLayout';
import HomePage from './features/home/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import "./styles/global.css";
import { trackVisit } from './utils/api';

function App() {
  useEffect(() => {
    trackVisit();
  }, []);

  return (
    <BasketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
