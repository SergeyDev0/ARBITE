import React from "react";
import modalStore from "../../store/modalStore";

const MainCard = ({ name, description, img, id}) => {
  return (
    <button className="main__card" 
      onClick={() => {
        modalStore.setStateModal();
        modalStore.setId(id);
      }
    }>
      <img className="main__card--img" src={img} alt={name} />
      <h3 className="main__card-title">{name}</h3>
      <p className="main__card-subtitle">{description}</p>
    </button>
  )
};

export default MainCard;
