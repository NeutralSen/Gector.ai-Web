import React from "react";
import logo from './../../../assets/img/gectorai.png';

const ProfilePage = () => {
  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
  };

  return (
    <div className="profile-container">
      <header className="landing-header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">Gector.ai</span>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      <main className="profile-main">
        <div className="profile-card">
          <h1 className="profile-title">Account Settings</h1>
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Your username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="New password" />
            </div>
            <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input type="file" id="avatar" />
            </div>
            <button type="button" className="save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 NeutralSen & Kuhaku. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
