import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./resource/page/auth/view/chat";
import LandingPage from ".//resource/page/landingpage";
import ProfilePage from "./resource/page/auth/view/profile";
import LoginPage from "./resource/page/auth/login";
import PrivateRoute from "./utils/routes/privateroute"; // Import the PrivateRoute component
import "./assets/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chatsss" element={<PrivateRoute element={<Chat />} />} />
        <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
