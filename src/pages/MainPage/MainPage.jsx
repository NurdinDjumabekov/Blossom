import React from "react";
import "./MainPage.scss";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { useDispatch } from "react-redux";
import { getPopularCategory } from "../../store/reducers/requestSlice";
import Advertising from "../../components/Advertising/Advertising";
import MainContent from "../../components/MainContent/MainContent";

const MainPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPopularCategory());
  }, []);
  return (
    <div>
      <Header />
      <Menu />
      <Advertising />
      <MainContent />
    </div>
  );
};

export default MainPage;
