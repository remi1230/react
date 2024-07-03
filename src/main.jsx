import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/footer';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Categories from './pages/Categories';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Connexion from './pages/Connexion';
import ProduitDetail from './pages/ProduitDetail';
import ProduitsByCategorie from './pages/ProduitsByCategorie';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';
import ScrollToTop from './components/ScrollToTop';

const Layout = ({ children }) => (
  <>
    <header>
      <Navigation />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

let link = document.createElement('link');
link.rel  = 'stylesheet';
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/produits" element={<Produits />} />
              <Route path="/produit/:id" element={<ProduitDetail />} />
              <Route path="/categorie/:categorie" element={<ProduitsByCategorie />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);
