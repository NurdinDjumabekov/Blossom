import React from "react";
import "./Advertising.scss";
import list from "../../assets/images/list.webp";

const Advertising = () => {
  return (
    <div className="advertising">
      <img src={list} alt="" className="list1" />
      <img src={list} alt="" className="list2" />
      <img src={list} alt="" className="list3" />
      <img src={list} alt="" className="list4" />
      <div className="container">
        <div className="advertising__inner">
          <div className="mainTitle">
            <h1>Доставка цветов Бишкек</h1>
            <p>Гарантия свежести букета на 7 дней!</p>
            <button>Выбрать букет</button>
          </div>
          <div className="oprosnik"></div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
