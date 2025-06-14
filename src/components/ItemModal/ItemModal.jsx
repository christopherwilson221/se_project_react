import './ItemModal.css';

function ItemModal({ activeModal, selectedCard, closeModalClick }) {
 return (
    <div className={`modal ${activeModal === "preview" && "modal__open"}`}>
      <div className="modal__item_content">
          <button type="button" className="modal__item_close" onClick={closeModalClick}></button>
      <img src={selectedCard.link} alt="" className="modal__item_image" />
      <div className="modal__item_footer">
         <h2 className="modal__item_caption">{selectedCard.name}</h2>
         <p className="modal__item_weather">Weather: {selectedCard.weather}</p>
      </div>
      </div>
    </div>
 );
}

export default ItemModal;