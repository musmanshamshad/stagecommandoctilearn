import React from "react";
import { useSelector } from "react-redux";
import Home from "../Containers/Home/Home/Home";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("auth");
  if (isLoggedIn) {
    return <Home />;
  } else {
    return <Navigate to="/auth" />;
  }
};
export default ProtectedRoute;
