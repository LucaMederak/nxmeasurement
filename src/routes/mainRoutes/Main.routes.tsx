import React from "react";
import { Routes, Route } from "react-router-dom";

//layout
import PublicLayout from "@layout/mainLayout/MainLayout";

//components
import { HomePage } from "@views/mainViews";
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

const MainRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default MainRoutes;
