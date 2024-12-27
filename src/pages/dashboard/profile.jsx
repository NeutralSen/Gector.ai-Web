import React from "react"; 
import Header from "./../../components/navbar/auth/authnavbar";

const ProfilePage = () => {
  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
  };

  return (
    <div className="profile-container">
      {/* Navbar */}
      <Header isLandingPage={false} />

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
