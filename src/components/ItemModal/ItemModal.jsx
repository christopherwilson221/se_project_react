import "./ItemModal.css";
import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ItemModal({
  activeModal,
  selectedCard,
  closeModalClick,
  handleDeleteItem,
}) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_open"}`}>
      <div className="modal__item_content">
        <button
          type="button"
          className="modal__item_close"
          onClick={closeModalClick}
        ></button>
        <img src={selectedCard.imageUrl} alt={selectedCard.name} className="modal__image" />
        <div className="modal__item_footer">
          <div className="modal__item_left">
            <h2 className="modal__item_caption">{selectedCard.name}</h2>
            <p className="modal__item_weather">
              Weather: {selectedCard.weather}
            </p>
          </div>
          {isOwn && (
            <button
              className="modal__item_delete"
              type="button"
              onClick={() => handleDeleteItem(selectedCard._id)}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
