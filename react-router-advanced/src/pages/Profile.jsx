import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
