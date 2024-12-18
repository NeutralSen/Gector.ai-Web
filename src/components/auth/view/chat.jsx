import React, { useState } from "react";
import { sendMessageToAI, stopAIResponse } from "./../../../utils/api/openaiservice"; // Import the stopAIResponse function
import { motion } from "motion/react";
import logo from './../../../assets/img/gectorai.png';

const Chat = () => {
  const [messages, setMessages] = useState([]); // Chat messages
  const [input, setInput] = useState(""); // User input
  const [isLoading, setIsLoading] = useState(false); // Loading state for AI response
  const [isGenerating, setIsGenerating] = useState(false); // Generating state for AI response

  const sendMessage = () => {
    if (input.trim()) {
      sendMessageToAI(input, setMessages, setInput, setIsLoading, setIsGenerating);
    }
  };

  const stopMessage = () => {
    stopAIResponse();
    setIsGenerating(false);
    setIsLoading(false);
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) { // Check if input is not empty
      e.preventDefault(); // Prevent form submission or extra new lines
      sendMessage();
    }
  };

  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_1fr_auto] mx-auto">
      {/* Navbar */}
      <header className="landing-header fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md py-2 px-4 z-10">
        <nav className="navbar flex justify-between items-center">
          <div className="logo flex items-center">
            <img src={logo} alt="Logo" className="logo-img w-12 h-auto mr-2" />
            <a href="/" className="logo-text text-2xl font-bold text-white">Gector.ai</a>
          </div>
          <ul className="nav-links flex gap-6">
            <li><a href="#features" className="text-white font-bold hover:text-blue-400">Features</a></li>
            <li><a href="#about" className="text-white font-bold hover:text-blue-400">About</a></li>
            <li><a href="#about" className="text-white font-bold hover:text-blue-400">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Chat Area - Full Width */}
      <div className="mt-20 p-4 h-[80vh] w-full max-w-[1200px] mx-auto">
        <div className="w-full h-full p-6 overflow-y-auto rounded-lg flex flex-col gap-4">
          {/* Loop through the messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`inline-block p-3 rounded-lg text-sm leading-6 ${
                msg.sender === "user"
                  ? "self-end bg-custom-main text-white rounded-br-none ml-auto"
                  : "self-start text-white rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}

          {/* Loading indicator */}
          {isGenerating && (
            <div className="inline-block p-3 rounded-lg text-sm leading-6 self-start bg-gray-200 text-black">
              <p>...</p>
            </div>
          )}
        </div>
      </div>

      {/* Input Bar Container */}
      <div className="p-4 w-full mx-auto">
        <div className="grid grid-cols-12 gap-2 mt-[-20px]">
          {/* Input Field - 10/12 Columns */}
          <div className="col-span-10 sm:col-span-11">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for Enter key press
              placeholder="Type your message..."
              className="w-full p-3 text-white bg-custom-main rounded-md placeholder-white focus:outline-none"
              disabled={isLoading} // Disable input while loading
            />
          </div>

          {/* Send/Stop Button - 2/12 Columns */}
          <div className="col-span-2 sm:col-span-1">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9, rotate: 2 }}
              onClick={isLoading ? stopMessage : sendMessage} // Trigger sendMessage or stopMessage based on isGenerating
              className={`w-full p-3 rounded-md transition text-sm sm:text-base bg-white text-black hover:bg-gray-200`}
              // disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Stop" : "Send"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;