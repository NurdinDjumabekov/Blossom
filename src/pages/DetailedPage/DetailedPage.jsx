import React from 'react';
import './DetailedPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getEveryData } from '../../store/reducers/requestSlice';
import altImg from '../../assets/images/no_photo.jpg';
import star from '../../assets/icons/star.svg';
import { renderStars } from '../../helpers/renderStar';

const DetailedPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { everyFlowers } = useSelector((state) => state.requestSlice);
  console.log(everyFlowers, 'everyFlowers');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getEveryData(id));
  }, []);

  return (
    <div className="detailedPage">
      <div className="container">
        <div className="navigateWeb">
          <NavLink to={'/'}>Доставка цветов</NavLink>
          <NavLink to={-1}>{everyFlowers?.category_name}</NavLink>
          <span>{everyFlowers?.product_name}</span>
        </div>
        <div className="detailedPage__inner">
          <div className="mainImgflowers">
            <img
              src={
                everyFlowers?.foto === 'undefined' || everyFlowers?.foto
                  ? everyFlowers?.foto
                  : altImg
              }
              alt=""
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
      </div>
    </div>
  );
};

export default DetailedPage;
