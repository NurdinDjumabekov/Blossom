import React from "react";
import "./DetailedPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getEveryData, getSweets } from "../../store/reducers/requestSlice";
import altImg from "../../assets/images/no_photo.jpg";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStar";
import CallMe from "../../components/CallMe/CallMe";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import EveryCard from "../../components/EveryCard/EveryCard";
import { imgParse } from "../../helpers/imgParse";

const DetailedPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { everyFlowers, listSweets } = useSelector(
    (state) => state.requestSlice
  );
  console.log(everyFlowers, "everyFlowers");

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getEveryData(id));
    dispatch(getSweets());
  }, []);

  return (
    <div className="detailedPage">
      <div className="container">
        <div className="navigateWeb">
          <NavLink to={"/"}>Доставка цветов</NavLink>
          <NavLink to={-1}>{everyFlowers?.category_name}</NavLink>
          <span>{everyFlowers?.product_name}</span>
        </div>
        <div className="detailedPage__inner">
          <div className="mainImgflowers">
            <img
              src={
                imgParse(everyFlowers?.foto)?.path
                  ? `http://operator.blossom.333.kg/${
                      imgParse(everyFlowers?.foto)?.path
                    }`
                  : altImg
              }
              alt="Картинка"
            />
          </div>
          <div className="mainContent">
            <h5>{everyFlowers?.product_name}</h5>
            <div className="star">
              {renderStars(5, star)}
              <b> / 0 отзыва</b>
            </div>
            <div className="priceflowers">
              <p>Цена: </p> <span>{everyFlowers?.product_price} сом</span>
            </div>
            <div className="sostav">
              <p>Состав: </p>
              <span>{everyFlowers?.sostav}</span>
            </div>
            <div className="actionsBtn">
              <button>+ Добавить в корзину</button>
              <button>Купить в 1 клик</button>
            </div>
          </div>
        </div>
        <h3 className="title">Добавьте к букету</h3>
        <div className="list">
          {listSweets?.map((i) => (
            <EveryCard key={i.codeid} content={i} />
          ))}
        </div>
        <CallMe />
        {/* <VideoInfo /> */}
      </div>
      <MoreInfo />
    </div>
  );
};

export default DetailedPage;
