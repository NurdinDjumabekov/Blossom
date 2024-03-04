import React from "react";
import "./MainContent.scss";
import roze from "../../assets/images/roze.png";
import fire from "../../assets/images/fire.png";
import klub from "../../assets/images/klubn.png";
import fruit from "../../assets/images/fruit.png";

const MainContent = () => {
  const listCategory = [
    { id: 1, name: "Розы", img: roze },
    { id: 2, name: "Пионы" },
    { id: 3, name: "Шары" },
    { id: 4, name: "Хиты", img: fire },
    { id: 5, name: "Клубника", img: klub },
    { id: 6, name: "Фруктовые", img: fruit },
    { id: 7, name: "В коробке" },
    { id: 8, name: "Акции" },
  ];
  return (
    <div className="maincontent">
      <div className="container">
        <div className="maincontent__inner">
          <button>₸ Выбрать бюджет </button>
          <ul className="category">
            {listCategory?.map((i) => (
              <li key={i.id}>
                <p>{i?.name}</p>
                {i?.img && <img src={i?.img} alt="" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
