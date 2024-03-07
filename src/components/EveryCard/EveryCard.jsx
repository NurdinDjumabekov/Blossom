import React, { useState } from "react";
import "./EveryCard.scss";
import noImg from "../../assets/images/no_photo.jpg";
import heartRed from "../../assets/icons/heartRed.svg";
import heartWhite from "../../assets/icons/heartWhite.svg";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStar";
import { useDispatch, useSelector } from "react-redux";
import {
  addListBasket,
  changeFavorites,
  changeListBasket,
} from "../../store/reducers/saveDataSlice";
import { useNavigate } from "react-router-dom";
import { imgParse } from "../../helpers/imgParse";

const EveryCard = ({ content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [look, setLook] = useState(false);
  const { listfavorites, listBasket } = useSelector(
    (state) => state.saveDataSlice
  );

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // Если клик был вне формы, то скрываем ее
      if (look && !event.target.closest(".sendZakaz")) {
        setLook(false);
      }
    };
    // Добавляем слушатель при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);
    // Очищаем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [look]);

  const deleteCard = (id) => {
    const updatedFavorites = listfavorites.filter((item) => item.codeid !== id);
    dispatch(changeFavorites(updatedFavorites));
  };

  const addCard = (obj) => {
    dispatch(changeFavorites([...listfavorites, obj]));
  };

  const addCardBasket = () => {
    dispatch(addListBasket(content));
    navigate("/basket");
  };

  const payOneClick = () => {
    setLook(true);
  };

  const clickDetailed = () => {
    navigate(`/every/${content?.codeid}`);
  };

  return (
    <div className="everyCard">
      <div className="imgs">
        <div className="mainImg">
          <img
            src={
              imgParse(content.foto)?.path
                ? `http://operator.blossom.333.kg/${
                    imgParse(content.foto)?.path
                  }`
                : noImg
            }
            alt="Картинка"
          />
        </div>
        <div className="heart">
          {listfavorites?.some((item) => item?.codeid === content?.codeid) ? (
            <div
              className="deleteImg"
              onClick={() => deleteCard(content?.codeid)}
            >
              <img src={heartRed} alt="" />
            </div>
          ) : (
            <div className="addImg" onClick={() => addCard(content)}>
              <img src={heartWhite} alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="info">
        <div className="moreInfo" onClick={clickDetailed}>
          <h3>{content?.product_name}</h3>
          <div className="rating">
            <span>
              {+content?.status === 0 ? "В наличии" : "нет в наличии"}
            </span>
            <div className="star">
              {renderStars(5, star)}
              <b> / 0</b>
            </div>
          </div>
          <p>{content?.product_price} сом</p>
        </div>
        <div className="actions">
          <button onClick={() => setLook(true)}>Купить в 1 клик</button>
          <button onClick={addCardBasket}>В корзину</button>
        </div>
      </div>

      {look && (
        <form className="sendZakaz" onSubmit={payOneClick}>
          <h5>Купить в 1 клик</h5>
          <p>Менеджер свяжется с вами в течение 3 минут</p>
          <input type="text" placeholder="+996(___)__-__-__" />
          <button type="submit">Купить в один клик</button>
        </form>
      )}
    </div>
  );
};

export default EveryCard;
