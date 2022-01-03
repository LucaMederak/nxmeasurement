import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

import {
  MeasurementPage,
  MeasurementListPage,
  MeasurementNewPage,
  MeasurementEditPage,
} from "@views/dashboardViews/measurements";

const MeasurementRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MeasurementListPage />} />
      <Route path="/new" element={<MeasurementNewPage />} />
      <Route
        path="/edit/:measurementEditId"
        element={<MeasurementEditPage />}
      />
      <Route path="/:measurementId" element={<MeasurementPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MeasurementRoutes;
