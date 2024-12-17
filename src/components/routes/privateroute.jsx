import React from "react";
import { Navigate } from "react-router-dom";

// Simulate the check for whether the user is logged in (you can use a state or context for this)
const isAuthenticated = () => {
  // You can replace this with a real authentication check
  return !!localStorage.getItem("userToken"); // Example: Check if a token exists in localStorage
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
