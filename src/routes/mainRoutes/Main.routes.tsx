import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//layout
import PublicLayout from "@layout/mainLayout/MainLayout";

//components
import PageLoading from "@components/loading/pageLoading/PageLoading";
import { HomePage, LoginPage, RegisterPage } from "@views/mainViews";

//redux
import { State } from "@redux/reducers";
import { useSelector } from "react-redux";

const PublicRoutes = () => {
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useSelector((state: State) => state.user);

  if (userLoading) {
    return <PageLoading />;
  }

  if (user) {
    return <Navigate to="/dashboard/profile" />;
  }

  return (
    <PublicLayout>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
