import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./../components/navbar/navbar";
import Footer from "./../components/footer/footer";
import Spinner from "./../assets/animation/spinner"
import { motion } from "framer-motion";
import { button, cardAnimation, LRAnimation, RLAnimation } from "./../assets/animation/motionconfig"

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false); // State for fade-out
  const navigate = useNavigate();

  const handleChatNowClick = () => {
    navigate("/chat");
  };

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
      }, 100); // Wait for the fade-out animation to finish
    }, 600);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  // Render Spinner during loading
  if (loading) {
    return <Spinner fading={fading} />;
  }

  return (
    <div className="font-sans text-white scroll-smooth">
      {/* Navbar */}
      <Header isLandingPage={true} />

      {/* Hero Section */}
      <main className="hero-section flex flex-col sm:flex-row justify-center items-center py-20 mt-[90px] mb-[50px] px-4 sm:px-8">
        <motion.div 
          {...LRAnimation}
          className="hero-content text-left flex-1 px-4 sm:px-8">
          <h1 className="hero-title text-4xl sm:text-5xl font-bold text-white mb-6">Welcome to Gector.ai</h1>
          <p className="hero-description text-xl text-white mb-8">Your partner AI chat</p>
          <motion.button
            {...button}
            className="chat-button bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200"
            onClick={handleChatNowClick}
          >
            Chat Now ➤
          </motion.button>
        </motion.div>
        <motion.div 
          {...RLAnimation}
          className="hero-image flex-1 mt-8 sm:mt-0">
          <img src="https://via.placeholder.com/800" alt="Landing Illustration" className="max-w-full rounded-lg" />
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="feature" className="features-section text-center py-10">
        <motion.h2 {...cardAnimation} className="text-3xl font-bold text-center mb-12">Feature</motion.h2>
        <div className="features-grid grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-4 sm:px-8">
          <motion.div 
            {...cardAnimation}
            className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
          <motion.div 
            {...cardAnimation}
            className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
          <motion.div 
            {...cardAnimation}
            className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section text-center py-10">
      <motion.h2 {...cardAnimation} className="text-3xl font-bold text-center mb-12">Team</motion.h2>
        <div className="about-grid grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-4 sm:px-8">
        <motion.div 
            {...cardAnimation}
            className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
          <motion.div 
            {...cardAnimation}
            className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
          <motion.div 
            {...cardAnimation}
            className="feature-item bg-white text-black p-6 rounded-lg shadow-lg col-span-2">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
          <motion.div 
            {...cardAnimation}
            className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-start-2 col-end-4">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
          <motion.div 
            {...cardAnimation}
            className="about-item bg-white text-black p-6 rounded-lg shadow-lg col-start-4 col-end-6">
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Landing Illustration" className="max-w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gector</h3>
            <p className="text-gray-600">Connect with anyone, anywhere, at lightning speed.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LandingPage;
