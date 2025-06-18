import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  closeModalClick,
  isOpen
}) {
  return (
    <div className={`modal ${isOpen && "modal_open"}`}> 
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={closeModalClick}
        />
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
