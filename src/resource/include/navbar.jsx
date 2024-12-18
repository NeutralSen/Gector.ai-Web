import React from "react";
import logo from './../../assets/img/gectorai.png';
import { motion } from "framer-motion";
import { navbarAnimation } from "./../../assets/animation/motionconfig"

const Header = ({ isLandingPage }) => {
  return (
    <motion.header {...navbarAnimation} className="landing-header fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md py-2 px-4 z-10">
      <nav className="navbar flex justify-between items-center">
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="logo-img w-12 h-auto mr-2" />
          <a href="/" className="logo-text text-2xl font-bold text-white">
            Gector.ai
          </a>
        </div>
        <ul className="nav-links flex gap-6">
          {isLandingPage ? (
            <>
              <li>
                <a href="#feature" className="text-white font-bold hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-white font-bold hover:text-blue-400">
                  About
                </a>
              </li>
            </>
          ) : null}
          <li>
            <a href="/login" className="text-white font-bold hover:text-blue-400">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
