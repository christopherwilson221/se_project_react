import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { useEffect, useState } from "react";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import { Routes, Route } from "react-router-dom";
import { getItems } from "../../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "sunny",
    temp: { F: 0, C: 0 },
    city: "loading",
    condition: "sunny",
    isDay: false,
    coordinates: "0;0",

  });
  const [activeModal, setActiveModal] = useState("none");
  const [selectedCard, setSelectedCard] = useState("none");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

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

  const handleAddItemModalSubmit = ({name, imageUrl, weather}) => {
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;

    setClothingItems((prevItems) => [
      ...prevItems, 
      {name, link: imageUrl, weather, id: newId}
  
    ]);

    closeModalClick();
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((coordinates) =>{
        console.log(coordinates)
        setWeatherData(filterWeatherData(coordinates));
      })
    getItems()
      .then((data) => {
        console.log(data)
      })
      .catch(console.error)

  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header openModalClick={openModalClick} weatherData={weatherData} />
          <Routes>
            <Route path="/" element={
              <Main
            clothingItems={clothingItems}
            weatherData={weatherData}
            openCardClick={openCardClick} 
          />
            }> 
            </Route>
            <Route path="/profile" element={<Profile openModalClick={openModalClick} clothingItems={clothingItems} onCardClick={openCardClick}/>}>
            </Route>
          </Routes>
          <Footer />
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            closeModalClick={closeModalClick}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            selectedCard={selectedCard}
            closeModalClick={closeModalClick}
          />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
