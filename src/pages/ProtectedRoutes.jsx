import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
    const navigate = useNavigate();

  // Replace this with your actual authentication logic
  const isAuthenticated = () => {
    console.log("Is the user authenticated?");
    return true; // Replace with your authentication logic
  };

  

  if (!isAuthenticated()) {
    // If not authenticated, redirect to the login page
    navigate("/login");
    return null;
  }

  return <Outlet />;
  // Render the protected content
};

export default PrivateRoute;
