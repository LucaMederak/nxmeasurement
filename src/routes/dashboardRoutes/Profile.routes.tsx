import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "@views/dashboardViews/profile/Profile.page";
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ProfileRoutes;
