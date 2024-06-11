import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

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
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
