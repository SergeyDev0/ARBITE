import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import logo from "../../svg/logo.svg"
import phoneIcon from "../../svg/phone.svg";
import locationIcon from "../../svg/location.svg";
import data from "../../data/catalogData.json";
import { observer } from "mobx-react";
import modalStore from "../../store/modalStore";

const Modal = observer(() => {
  const [isData, setIsData] = React.useState(null);
  React.useEffect(() => {
    setIsData(data[modalStore.id]);
  }, [modalStore.id])
  return (
    <div className="modal__wrapper">
      <div className="modal">
        <div className="col">
          <img className="modal__img" src={isData?.img} alt={isData?.name} />
        </div>
        <div className="col">
          <div className="row">
            <h3 className="modal__title">{isData?.name}</h3>
            <p className="modal__description">{isData?.description}</p>
            <Link to="tel:+78652550224" className="modal__contact">
              <img className="modal__contact--icon" src={phoneIcon} />
              +78652550224
            </Link>
            <Link to="https://yandex.ru/maps/-/CDRmaO0Z" target="_blank" className="modal__contact">
              <img className="modal__contact--icon" src={locationIcon} />
              Ставрополь, ул. Пирогова, 36Б, 1 этаж
            </Link>
          </div>
          <div className="row">
            <img className="modal__logo" src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
});

export default Modal;
