import React from "react";
import "./Header.scss";
import logo from "../../assets/images/LogoBlossom.png";
import inst from "../../assets/icons/insta.svg";
import wa from "../../assets/icons/wa.svg";
import wa1 from "../../assets/icons/search.svg";
import { numWebSite } from "../../helpers/dataArr";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="main">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <p>Доставка цветов, шаров и подарков в Бишкеке</p>
          </div>
          <div className="num">г. Бишкек</div>
          <div className="filial">
            <p>{numWebSite}</p>
          </div>
          <div className="contacts">
            <div>
              <img src={inst} alt="inst" />
            </div>
            <div>
              <img src={wa} alt="W/A" />
            </div>
          </div>
          <div className="header__inner__search">
            {/* <img src={wa1} alt="" /> */}
          </div>
          <div className="mainInfo">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
