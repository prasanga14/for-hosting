import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import VerifyOTPPage from './pages/VerifyOTPPage';
import DashboardPage from './pages/DashboardPage';
import CreateIDERoomPage from './pages/CreateIDERoomPage';
import CreateVideoConferencePage from './pages/CreateVideoConferencePage';
import GithubExplorerPage from './pages/GithubExplorerPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import ProtectedRoute from './utils/ProtectedRoutes';
import AuthOnlyRoute from './utils/AuthOnlyRoute'; // ✅
import EditorPage from './pages/EditorPage';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Only for authenticated but not verified users */}
        <Route
          path="/verify-otp"
          element={
            <AuthOnlyRoute>
              <VerifyOTPPage />
            </AuthOnlyRoute>
          }
        />

        {/* Protected routes (authenticated and verified) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-ide-room" element={<CreateIDERoomPage />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
          <Route
            path="/create-video-conference"
            element={<CreateVideoConferencePage />}
          />
          <Route path="/github-explorer" element={<GithubExplorerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
