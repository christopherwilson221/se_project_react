import "./EditProfileModal.css";

function editProfileModal({
  children,
  title,
  buttonText,
  closeModalClick,
  isOpen,
  onSubmit,
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
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default editProfileModal;