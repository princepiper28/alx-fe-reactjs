import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Import useAuth hook

const { isAuthenticated } = useAuth(); // Get authentication status
const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
