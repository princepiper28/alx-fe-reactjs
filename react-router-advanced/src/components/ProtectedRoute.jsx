import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Change to `true` to simulate authentication

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
