import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

import {
  ClientPage,
  ClientListPage,
  ClientNewPage,
  ClientEditPage,
} from "@views/dashboardViews/clients";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientListPage />} />
      <Route path="/new" element={<ClientNewPage />} />
      <Route path="/edit/:clientEditId" element={<ClientEditPage />} />
      <Route path="/:clientId" element={<ClientPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ClientRoutes;
