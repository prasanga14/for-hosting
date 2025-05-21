import { Navigate } from 'react-router-dom';
import React from 'react';

function AuthOnlyRoute({ children }) {
  const token = localStorage.getItem('token');
  const isVerified = localStorage.getItem('isVerified');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isVerified === 'true') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AuthOnlyRoute;
