import React from "react";
import ReactDOM from "react-dom/client";
import Chat from "./chat"; // Import the Chat component
import "./index.css"; // Add global styles or reset styles if necessary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);
