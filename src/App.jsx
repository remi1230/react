import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import Produits from './components/Produits';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div>
      <Navigation />
        <Routes>
          <Route exact path="/" component={Accueil} />
          <Route path="/produits" component={Produits} />
          <Route path="/categories" component={<Categories />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
