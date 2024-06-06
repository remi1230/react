import { useState } from 'react'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './pages/Navigation';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Categories from './pages/Categories';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Connexion from './pages/Connexion';

let link = document.createElement('link');
link.rel  = 'stylesheet';
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);