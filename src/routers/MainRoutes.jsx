import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Preloader from "../components/Preloader/Preloader";
import Alerts from "../components/Alerts/Alerts";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
      {/* {true && <Preloader />} */}
      <Alerts />
    </>
  );
};

export default MainRoutes;
