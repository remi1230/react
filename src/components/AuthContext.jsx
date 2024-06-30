import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getOneUserById } from '../services/authInfos';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password
      });
      const user = await getOneUserById(response.data.id);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.response ? error.response.data : 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
