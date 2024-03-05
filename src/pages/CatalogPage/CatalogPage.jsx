import React from "react";
import "./CatalogPage.scss";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getTopCategory } from "../../store/reducers/requestSlice";
import { NavLink } from "react-router-dom";
import hit from "../../assets/none/hit.webp";
import rose from "../../assets/none/rose.webp";
import pions from "../../assets/none/pions.webp";
import inKorobka from "../../assets/none/inKorobka.webp";
import nam from "../../assets/none/nam.webp";
import tulpan from "../../assets/none/tulpan.webp";
import gipsofils from "../../assets/none/gipsofils.webp";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const arrImg = [hit, rose, pions, inKorobka, nam, tulpan, gipsofils];

  const { listTopCategory } = useSelector((state) => state.requestSlice);

  React.useEffect(() => {
    dispatch(getTopCategory());
  }, []);

  console.log(listTopCategory, "listTopCategory");

  return (
    <div className="catalogPage">
      <div className="container">
        <div className="catalogPage__inner">
          <Nav />
          <h3 className="title">Популярные категории</h3>
          <div className="topCategory">
            {listTopCategory?.map((i, ind) => (
              <NavLink key={i?.codeid}>
                <div className="flowersImg">
                  <img src={arrImg[ind]} alt="" />
                </div>
                <div className="actionsClick">
                  <i></i>
                  <p>{i?.category_name}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
