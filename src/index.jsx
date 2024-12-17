import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "motion/react"
import Chat from "./components/auth/view/chat";
import LandingPage from "./components/landingpage";
import ProfilePage from "./components/auth/view/profile";
import PrivateRoute from "./components/routes/privateroute"; // Import the PrivateRoute component
import "./assets/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatsss" element={<PrivateRoute element={<Chat />} />} />
        <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
