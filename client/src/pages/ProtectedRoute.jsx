import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { Loading } from "../components";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  console.log("protected", user, userLoading);

  if (userLoading) return <Loading />;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
