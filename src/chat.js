import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // We'll add styles for the chat here.

const Chat = () => {
  const [messages, setMessages] = useState([]); // Chat messages
  const [input, setInput] = useState(""); // User input
  const [isLoading, setIsLoading] = useState(false); // Loading state for AI response

  const sendMessage = async () => {
    if (!input.trim()) return; // Skip empty messages

    // Add user's message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear input
    setIsLoading(true);

    try {
      // Call your AI API (replace the URL with your backend endpoint)
      const response = await axios.post("/api/chat", { message: input });

      // Add AI's response to the chat
      const aiMessage = { sender: "ai", text: response.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, something went wrong!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        {isLoading && (
          <div className="message ai">
            <p>...</p>
          </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
