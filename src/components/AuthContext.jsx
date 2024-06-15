import React, { createContext, useState } from 'react';

// Créez le contexte d'authentification
export const AuthContext = createContext();

// Créez un fournisseur de contexte
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fonction pour se connecter
  const login = () => {
    setIsAuthenticated(true);
  };

  // Fonction pour se déconnecter
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
