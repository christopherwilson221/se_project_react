import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function AddItemModal({
  isOpen,
  closeModalClick,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleimageUrlChange = (e) => {
    setimageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    setName("");
    setimageUrl("");
    setWeather("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      name="new-card"
      isOpen={isOpen}
      closeModalClick={closeModalClick}
      onSubmit={handleSubmit}
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
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weather"
            className="modal__input_type_radio"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            className="modal__input_type_radio"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            className="modal__input_type_radio"
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
