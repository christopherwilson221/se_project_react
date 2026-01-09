import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ClothesSection({
  onCardClick,
  clothingItem,
  handleAddClick,
  onCardLike,
}) {

  const { currentUser } = React.useContext(CurrentUserContext);
  const userItem =
    currentUser && currentUser._id
      ? clothingItem.filter((item) => item.owner === currentUser._id)
      : [];

  return (
    <div className="clothes-section">
      <div className="clothes__section-content">
        <p className="clothes__section-text">Your Items</p>
        <button className="clothes__section-add" onClick={handleAddClick} type="button">
          +Add New
        </button>
      </div>
      <ul className="clothes__section-list">
        {isOwn &&
          userItem.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} onCardLike={onCardLike} />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
