import React from "react";
import "./Profiles.css"; 

const ProfileComp = () => {
  const profiles = [
    { id: 1, name: "Profile 1", color: "#f5c518" },
    { id: 2, name: "Profile 2", color: "#00a8e1" },
    { id: 3, name: "Profile 3", color: "#e50914" },
    { id: 4, name: "Profile 4", color: "#0071eb" },
    { id: 5, name: "Kids", color: "#8bc34a" },
  ];

  return (
    <div className="profiles-container">
      <h1 className="netflix-title">NETFLIX</h1>
      <h2 className="whos-watching">Who's watching?</h2>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile"
            style={{ backgroundColor: profile.color }}
          >
            <div className="profile-icon">😊</div>
            <span className="profile-name">{profile.name}</span>
          </div>
        ))}
      </div>
      <button className="support-button">SUPPORT 4 SCREENS</button>
    </div>
  );
};

export default ProfileComp;
