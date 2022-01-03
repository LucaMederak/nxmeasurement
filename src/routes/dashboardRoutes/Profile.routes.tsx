import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "@views/dashboardViews/profile/Profile.page";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
};

export default ProfileRoutes;
