import React from "react"
import { Link } from "react-router-dom";
import logo from "../../svg/logo.svg"
import PhoneIcon from "../../svg/phone-w.svg";
import locationIcon from "../../svg/location-w.svg";
import closeIcon from "../../svg/close.svg";
import data from "../../data/catalogData.json";
import { observer } from "mobx-react";
import modalStore from "../../store/modalStore";
import "./modal.scss";

const Modal = observer(() => {
  const [isData, setIsData] = React.useState(null);
  React.useEffect(() => {
    setIsData(data[modalStore.id]);
  }, [modalStore.id])
  return (
    <div className={modalStore.stateModal ? "modal__wrapper show" : "modal__wrapper"}>
      <div className="modal">
        <button className="modal__close" onClick={() => modalStore.setStateModal()}>
          <img src={closeIcon} className="modal__close--img" />
        </button>
        <div className="modal__img-wrapper">
          <img className="modal__img" src={isData?.img} alt={isData?.name} />
        </div>
        <div className="col">
          <div className="row">
            <Link to="tel:+78652550224" className="modal__contact">
              <img className="modal__contact--icon" src={PhoneIcon} />
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
