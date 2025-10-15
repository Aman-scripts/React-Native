import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextValue = {
  isAuthenticated: boolean;
  initializing: boolean;
  signIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  initializing: true,
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('auth_token');
        setIsAuthenticated(!!token);
      } finally {
        setInitializing(false);
      }
    })();
  }, []);

  const signIn = useCallback(async (email: string) => {
    // Fake token, replace with real API call
    await AsyncStorage.setItem('auth_token', `token:${email}`);
    setIsAuthenticated(true);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(() => ({ isAuthenticated, initializing, signIn, signOut }), [isAuthenticated, initializing, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


