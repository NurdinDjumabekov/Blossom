import React from "react";
import "./Menu.scss";

const Menu = () => {
  const listCategory = [
    { id: 1, name: "Каталог", active: true, link: "" },
    { id: 2, name: "Розы", active: true, link: "" },
    { id: 3, name: "Пионы", active: true, link: "" },
    { id: 4, name: "В коробке", active: true, link: "" },
    { id: 5, name: "Съедобные", active: true, link: "" },
    { id: 6, name: "Клубника", active: true, link: "" },
    { id: 7, name: "Шары", active: true, link: "" },
    { id: 8, name: "Контакты", active: true, link: "" },
    { id: 9, name: "Вакансии", active: true, link: "" },
  ];

  const clickCategory = (click) => {};

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__inner">
          <div className="main">
            <div>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <p>МЕНЮ</p>
          </div>
          <ul className="category">
            {listCategory.map((categ) => (
              <li onClick={() => clickCategory()}>{categ?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
