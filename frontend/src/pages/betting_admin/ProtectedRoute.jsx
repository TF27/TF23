// ProtectedRoute.js
import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Betting_admin from './Top.jsx';

const ProtectedRoute = ({ isAuthenticated }) => {

  console.log('isAuthenticated:', isAuthenticated); // Log the value
  return (
    <Routes>
        <Route
            path="/"
            element={isAuthenticated ? <Betting_admin /> : <Navigate to="/betting-admin-login" replace />}
            />
    </Routes>
  );
};

export default ProtectedRoute;
