import React from 'react';
import './Header.scss';
import logo from '../../assets/images/LogoBlossom.png';
import inst from '../../assets/icons/insta.svg';
import wa from '../../assets/icons/wa.svg';
import wa1 from '../../assets/icons/search.svg';
import { numWebSite } from '../../helpers/dataArr';
import { NavLink } from 'react-router-dom';
import favorite from '../../assets/icons/heartBlack.svg';
import basket from '../../assets/icons/basket.svg';
import account from '../../assets/icons/account.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const { listfavorites } = useSelector((state) => state.saveDataSlice);

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="main">
            <NavLink to={'/'} className="logo">
              <img src={logo} alt="Logo" />
            </NavLink>
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
            <NavLink to={'/favorite'}>
              <img src={favorite} alt="{}" />
              {listfavorites?.length === 0 ? (
                ''
              ) : (
                <p>{listfavorites?.length}</p>
              )}
            </NavLink>
            <NavLink>
              <img src={basket} alt="" />
            </NavLink>
            <NavLink>
              <img src={account} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
