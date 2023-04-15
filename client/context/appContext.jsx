import { createContext, useState, useContext, useEffect } from "react";
import { authFetch } from "../helpers/authFetch";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const logout = async () => {
    await authFetch.get("/auth/logout");
  };

  const getCurrentUser = async () => {
    setUserLoading(true);
    try {
      const { data } = await authFetch.get("/auth/getCurrentUser");
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
