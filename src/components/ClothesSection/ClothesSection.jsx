import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ClothesSection({
  openModalClick,
  onCardClick,
  clothingItems,
  onCardLike,
}) {

  const { currentUser } = React.useContext(CurrentUserContext);
  const userItem =
    currentUser && currentUser._id
      ? clothingItems.filter((item) => item.owner === currentUser._id)
      : [];

  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__button" onClick={openModalClick}>
          +Add New
        </button>
      </div>
      <ul className="clothes-section__list">
        {isOwn &&
          clothingItems.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} onCardLike={onCardLike} />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
