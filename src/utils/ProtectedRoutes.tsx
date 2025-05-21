import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

function ProtectedRoute() {
  const token = localStorage.getItem('token');
  const isVerified = localStorage.getItem('isVerified');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isVerified === 'false') {
    return <Navigate to="/verify-otp" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
