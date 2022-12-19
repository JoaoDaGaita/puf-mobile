import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext([{}, () => ({})]);

export const useAuth = () => {
  const [state, setState] = useContext(AuthContext);

  const logout = () => setState(false);

  return [state, { login: setState, logout }];
};
export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    rehydrated: false,
  });

  const setStateContent = (data) =>
    setState((prev) => ({
      ...prev,
      ...data,
    }));

  const setItem = async (value) => {
    try {
      await AsyncStorage.setItem("auth2", value && JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const data = await AsyncStorage.getItem("auth2");
      setState((prev) => ({
        ...prev,
        ...(data !== null && JSON.parse(data)),
        rehydrated: true,
      }));
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
    <AuthContext.Provider value={[state, setStateContent]}>
      {children}
    </AuthContext.Provider>
  );
};
