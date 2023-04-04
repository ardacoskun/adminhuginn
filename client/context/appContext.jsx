import { createContext, useState, useContext, useEffect } from "react";
import { getCurrentUser } from "../helpers/authToken";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
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
