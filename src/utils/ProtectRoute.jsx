import { Navigate, Outlet } from "react-router-dom";

import React from "react";

export default function ProtectRoute() {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
}
