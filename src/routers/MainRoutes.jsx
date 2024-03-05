import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Alerts from "../components/Alerts/Alerts";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import CatalogPage from "../pages/CatalogPage/CatalogPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
      {/* {true && <Preloader />} */}
      {/* <Alerts /> */}
    </>
  );
};

export default MainRoutes;
