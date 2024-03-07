import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./MainLayouts.scss";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

function MainLayouts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mainPage">
        <div className="shadow"></div>
        <div className="menuMain">
          <Header />
          <Menu />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayouts;
