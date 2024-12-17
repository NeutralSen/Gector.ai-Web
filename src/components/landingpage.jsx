import React from "react";
import { useNavigate } from "react-router-dom";
import logo from './../assets/img/gectorai.png'; 
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleChatNowClick = () => {
    navigate("/chat");
  };

  return (
    <div className="font-sans text-white">
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

      {/* Hero Section */}
      <main className="hero-section flex flex-col sm:flex-row justify-center items-center py-20 mt-[90px] mb-[50px] px-4 sm:px-8">
        <div className="hero-content text-left flex-1 px-4 sm:px-8">
          <h1 className="hero-title text-4xl sm:text-5xl font-bold text-white mb-6">Welcome to Gector.ai</h1>
          <p className="hero-description text-xl text-white mb-8">Your partner AI chat</p>
          <button
            className="chat-button bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 transition duration-300"
            onClick={handleChatNowClick}
          >
            Chat Now ➤
          </button>
        </div>
        <div className="hero-image flex-1 mt-8 sm:mt-0">
          <img src="https://via.placeholder.com/800" alt="Landing Illustration" className="max-w-full rounded-lg" />
        </div>
      </main>

      {/* Features Section */}
      <section id="feature" className="features-section text-center py-10">
        <h2 className="text-3xl font-bold text-center mb-12">Feature</h2>
        <div className="features-grid grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-4 sm:px-8">
          <div className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
          <div className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
          <div className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section text-center py-10">
        <h2 className="text-3xl font-bold text-center mb-12">Team</h2>
        <div className="about-grid grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-4 sm:px-8">
          <div className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
          <div className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
          <div className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
          <div className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-start-2 col-end-4">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
          <div className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-start-4 col-end-6">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mb-[15px] text-white text-center">
        <p>&copy; 2024 NeutralSen & Kuhaku. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
