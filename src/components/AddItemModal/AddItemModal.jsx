import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function AddItemModal({
  isOpen,
  closeModalClick,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New Garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddSubmit}

    >
      <div className="modal__block">
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="modal__input"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div className="modal__block">
        <label htmlFor="imageUrl" className="modal__label">
          Link {""}
          <input
            type="text"
            id="imageUrl"
            className="modal__input"
            placeholder="Image Url"
            onChange={handleimageUrlChange}
            value={imageUrl}
          />
        </label>
      </div>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend"> Select Weather Type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radio"
            value="hot"
            className="modal__radio-input"
            id="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          {""}Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radio"
            value="warm"
            className="modal__radio-input"
            id="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          {""}Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radio"
            value="cold"
            className="modal__radio-input"
            id="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          {""}Cold
        </label>
      </fieldset>
      <button type="submit" className="modal__submit" > Add Garment </button>
    </ModalWithForm>
  );
}