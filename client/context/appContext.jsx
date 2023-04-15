import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { checkToken } from "../helpers/authToken";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { config } = checkToken();

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/auth/getCurrentUser`,
        config
      );
      setUser(data);
    } catch (error) {
      if (error.response.status === 401) return;
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const values = {
    user,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTheme must be used within a AppContextProvider");
  }

  return context;
};
