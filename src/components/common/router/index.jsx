import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "routes";

import { PageNotFound } from "pages";

import { MainLayout } from "layouts";

import { Meta } from "../meta";

export const Router = () => {
  // Rendering routes
  const renderAppRoutes = () =>
    AppRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={<Meta component={route.component} title={route.title} description={route.description} />} />
    ));

  return (
    <Routes>
      <Route element={<MainLayout />}>{renderAppRoutes()}</Route>
      <Route path="*" element={<Meta component={<PageNotFound />} title="404" description="Page Not Found" />} />
    </Routes>
  );
};
