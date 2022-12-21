import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext([{}, () => ({})]);

const STORAGE_KEY = "auth01";

export const useAuth = () => {
  const [state, setState] = useContext(AuthContext);

  const logout = () =>
    setState((prevState) => ({
      ...prevState,
      auth: false,
    }));

  const login = (auth) =>
    setState((prevState) => ({
      ...prevState,
      auth,
    }));

  return [state, { login, logout }];
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    rehydrated: false,
  });

  const setItem = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value && JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);

      if (data) {
        setState(JSON.parse(data));
      } else {
        state.rehydrated = true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    state?.rehydrated && setItem(state);
  }, [JSON.stringify(state)]);

  useEffect(() => {
    getItem();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
