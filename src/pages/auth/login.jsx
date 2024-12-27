import React, { useState } from "react";
import Header from "./../../components/navbar/auth/authnavbar";

const Auth = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Handle flipping the card
  const toggleFlip = () => setIsFlipped(!isFlipped);

  // Login form handlers
  const handleLoginChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful! Redirecting...");
        // Store token in localStorage
        localStorage.setItem("userToken", data.token);
        // Redirect user to profile page or wherever you want
        window.location.href = "/profile";
      } else {
        setMessage(data.error || "Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred. Please try again later.");
    }
  };

  // Register form handlers
  const handleRegisterChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
        toggleFlip(); // Flip back to login form after successful registration
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Header isLandingPage={false} />
      <div className="relative w-[400px] h-[500px] perspective">
        {/* Card */}
        <div
          className={`absolute w-full h-full bg-custom-main text-white rounded-lg shadow-lg transform transition-transform duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Login Form */}
          <div
            className={`absolute w-full h-full p-6 backface-hidden ${
              isFlipped ? "hidden" : ""
            }`}
          >
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border text-black placeholder-gray-400 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border text-black placeholder-gray-400 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white mt-[10px] rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
            <button onClick={toggleFlip} className="mt-4 text-white">
              Don't have an account? Register
            </button>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </div>

          {/* Register Form */}
          <div
            className={`absolute w-full h-full p-6 backface-hidden transform rotate-y-180 ${
              isFlipped ? "" : "hidden"
            }`}
          >
            <h1 className="text-2xl font-bold mb-6">Register</h1>
            <form
              onSubmit={handleRegisterSubmit}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  value={registerFormData.name}
                  onChange={handleRegisterChange}
                  className="w-full px-4 py-2 border text-black placeholder-gray-400 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  value={registerFormData.email}
                  onChange={handleRegisterChange}
                  className="w-full px-4 py-2 border text-black placeholder-gray-400 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  value={registerFormData.password}
                  onChange={handleRegisterChange}
                  className="w-full px-4 py-2 border text-black placeholder-gray-400 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white mt-[10px] rounded-md hover:bg-blue-600"
              >
                Register
              </button>
            </form>
            <button onClick={toggleFlip} className="mt-4 text-white">
              Already have an account? Login
            </button>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
