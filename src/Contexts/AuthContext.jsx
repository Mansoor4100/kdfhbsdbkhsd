import React, { createContext, useState, useContext } from 'react';
import * as authService from '../services/authService';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await authService.loginApi(email, password);
    if (response.success) {
      setUser(response.user);
      return { success: true };
    }
    return { success: false, message: response.message };
  };

  const register = async (name, email, password) => {
    const response = await authService.registerApi(name, email, password);
    if (response.success) {
      setUser(response.user);
      return { success: true };
    }
    return { success: false, message: response.message };
  };

  const logout = async () => {
    await authService.logoutApi();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
