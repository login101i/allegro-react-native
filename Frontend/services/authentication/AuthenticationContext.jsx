import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isFetching: false,
    error: false,
    token: ''
  });

  useEffect(() => {
    const loadUserFromAsyncStorage = async () => {
      let data = await AsyncStorage.getItem('@auth');
      const as = await JSON.parse(data);
      setState((prevState) => ({ ...prevState, user: as?.user || null, token: as?.token || null }));
    };
    loadUserFromAsyncStorage();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
