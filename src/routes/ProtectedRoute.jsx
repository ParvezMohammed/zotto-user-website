import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { adminAuthState } from "../state/authenticatedState/authenticatedState";
import { useRecoilValue } from "recoil";

const ProtectedRoute = () => {
  // const isAuthenticated = useRecoilValue(adminAuthState).isAuthenticated;
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
}

  return <Outlet />;
};

export default ProtectedRoute;
