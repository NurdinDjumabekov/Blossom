import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContactsPage.scss';
import { numWebSite } from '../../helpers/dataArr';
import { Map, Placemark, YMaps } from 'react-yandex-maps';

const ContactsPage = () => {
  return (
    <div className="contactsPage">
      <div className="container">
        <div className="contactsPage__inner">
          <div className="navigateWeb">
            <NavLink to={'/'}>Доставка цветов</NavLink>
            <span>Контакты</span>
          </div>
          <div className="infoContact">
            <div className="map">
              <YMaps>
                <Map
                  defaultState={{
                    center: [42, 8924, 74, 5366],
                    zoom: 14,
                  }}
                  style={{
                    borderRadius: '8px',
                    width: '600px',
                    height: '100%',
                  }}
                >
                  <Placemark defaultGeometry={[42, 8924, 74, 5366]} />
                </Map>
              </YMaps>
            </div>
            <div className="mapText">
              <div>
                <p>Телефоны:</p>
                <span>{numWebSite}</span>
              </div>
              <div>
                <p>Адрес офиса:</p>
                <span>
                  050010 г. Алматы, Медеуский район, ул. Радлова, д. 50/40
                </span>
              </div>
              <div>
                <p>Инстаграм::</p>
                <span>pro.buket_kz</span>
              </div>
              <div>
                <p>Почта:</p>
                <span>mail@pro-buket.kz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
