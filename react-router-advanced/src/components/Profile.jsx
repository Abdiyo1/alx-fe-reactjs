import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

function Profile() {
    return (
        <div>
            <h2>Profile Page</h2>
            <nav>
                <Link to="details">Details</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}

export default Profile;