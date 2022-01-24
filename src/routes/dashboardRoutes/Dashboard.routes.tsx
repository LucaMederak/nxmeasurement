import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//layout
import DashboardLayout from "@layout/dashboardLayout/DashboardLayout";

//components
import PageLoading from "@components/loading/pageLoading/PageLoading";
import ClientsRoutes from "./Client.routes";
import MeasurementRoutes from "./Measurement.routes";
import ProfileRoutes from "./Profile.routes";
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

//redux
import { State } from "@redux/reducers";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user, loading: userLoading } = useSelector(
    (state: State) => state.user
  );

  if (userLoading) {
    return <PageLoading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="clients/*" element={<ClientsRoutes />} />
        <Route path="profile/*" element={<ProfileRoutes />} />
        <Route path="measurements/*" element={<MeasurementRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
