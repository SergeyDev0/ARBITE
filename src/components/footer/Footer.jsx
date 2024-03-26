import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Link } from "react-router-dom";
import "./footer.scss";
import PhoneIcon from "../../svg/phone.svg";
import locationIcon from "../../svg/location.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__wrapper">
        <div className="footer__col">
          <div className="footer__row">
            <h3 className="footer__title">Кратко о нас</h3>
            <p className="footer__descriptiton">Предприятие "Арбайт" занимается продажей строительных материалов, инструмента и хозяйственных товаров. Здесь вы можете приобрести практически всё для строительства, отделки квартир и домов.</p>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">Контакты</h3>
            <ul className="footer__contacts-list">
              <li className="footer__contacts-list__item">
                <Link to="tel:+78652550224" className="footer__contacts-list__item--link">
                  <img className="footer__contacts-list__item--icon" src={PhoneIcon} />
                  +78652550224
                </Link>
              </li>
              <li className="footer__contacts-list__item">
                <Link to="" className="footer__contacts-list__item--link">
                  <img className="footer__contacts-list__item--icon" src={locationIcon} />
                  Ставрополь, ул. Пирогова, 36Б, 1 этаж
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__col">
          <h3 className="footer__title">Мы на карте</h3>
          <YMaps>
            <div className="footer__map">
              <Map defaultState={{ center: [45.006650, 41.917011], zoom: 17 }} width='100%' >
                <Placemark geometry={[45.006650, 41.917011]} />
              </Map>
            </div>
          </YMaps>
        </div>
        <div className="footer__col">
          <div className="footer__row">
            <h3 className="footer__title">Навигация по сайту</h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-list__item">
                  <a href="#catalog" className="footer__nav-list__item--link">Каталог</a>
                </li>
                <li className="footer__nav-list__item">
                  <a href="#reviews" className="footer__nav-list__item--link">Отзывы</a>
                </li>
                <li className="footer__nav-list__item">
                  <a href="#footer" className="footer__nav-list__item--link">Как с нами связаться?</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__row">
            <p className="footer__copyright">©️ 2024 Арбайт</p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
