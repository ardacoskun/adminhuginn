import React from "react";
import { Navigate } from "react-router-dom";

import { useCookies } from "react-cookie";

const PublicRoute = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  if (cookies.user) return <Navigate to="/" />;

  return children;
};

export default PublicRoute;
