import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { useEffect, useState } from "react";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "", temp: { F: 99 }, city: "" });
  const [activeModal, setActiveModal] = useState("none");
  const [selectedCard, setSelectedCard] = useState("");

  const openCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const openModalClick = () => {
    setActiveModal("add-garment");
  };

  const closeModalClick = () => {
    setActiveModal("none");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredWeatherData = filterWeatherData(data);
        setWeatherData(filteredWeatherData)
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header openModalClick={openModalClick} weatherData={weatherData} />
        <Main weatherData={weatherData} openCardClick={openCardClick} />
        <Footer />
        <ModalWithForm
          title="New Garment"
          buttonText="Add Garment"
          activeModal={activeModal}
          closeModalClick={closeModalClick}
        >
          <div className="modal__block">
            <label htmlFor="name" className="modal__label">
              Name {""}
              <input
                type="text"
                id="name"
                className="modal__input"
                placeholder="Name"
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
              />
            </label>
          </div>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="hot"
                type="radio"
                name="weather"
                className="modal__input_type_radio"
              />{" "}
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="warm"
                type="radio"
                name="weather"
                className="modal__input_type_radio"
              />{" "}
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="cold"
                type="radio"
                name="weather"
                className="modal__input_type_radio"
              />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          closeModalClick={closeModalClick}
        />
      </div>
    </div>
  );
}

export default App;
