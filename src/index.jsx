import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/dashboard/chat";
import LandingPage from "./pages/landingpage";
import ProfilePage from "./pages/dashboard/profile";
import LoginPage from "./pages/auth/login";
import PrivateRoute from "./utils/routes/privateroute"; // Import the PrivateRoute component
import "./assets/styles/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chatsss" element={<PrivateRoute element={<Chat />} />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfilePage />} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
