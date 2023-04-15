import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { checkToken } from "../helpers/authToken";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const { config } = checkToken();

  const logout = async () => {
    await axios.get(
      `${import.meta.env.VITE_SERVER_API_URL}/auth/logout`,
      config
    );
  };

  const getCurrentUser = async () => {
    setUserLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/auth/getCurrentUser`,
        config
      );
      setUser(data);
      setUserLoading(false);
    } catch (error) {
      setUserLoading(false);
      if (error.response.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const values = {
    user,
    userLoading,
    logout,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
