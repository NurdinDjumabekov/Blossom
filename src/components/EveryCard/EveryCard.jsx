import React from "react";
import "./EveryCard.scss";
import noImg from "../../assets/images/no_photo.jpg";

const EveryCard = ({ content }) => {
  return (
    <div className="everyCard">
      <div className="imgs">
        <div>
          <img
            src={content.foto === "undefined" ? noImg : content.foto}
            alt=""
          />
        </div>
      </div>
      <div className="info">
        <div className="moreInfo">
          <h3>{content?.product_name}</h3>
          <span>{+content?.status === 0 ? "В наличии" : "нет в наличии"}</span>
          <p>{content?.product_price} сом</p>
        </div>
        <div className="actions">
          <button>Купить в 1 клик</button>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default EveryCard;
