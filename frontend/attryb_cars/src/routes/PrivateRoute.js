import { Navigate } from "react-router-dom";
import React from "react";
import { AuthContext } from "../context/authContext";

export const PrivateRoute = ({ children }) => {
  const { adminAuth } = React.useContext(AuthContext);
  console.log(adminAuth);
  return adminAuth ? children : <Navigate to="/adminLogin" />;
};