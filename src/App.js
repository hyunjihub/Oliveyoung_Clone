import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './pages/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Menu from './components/Menu';
import Ranking from './pages/Ranking';
import React from 'react';

export default function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
