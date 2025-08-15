import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { useEffect, useState } from "react";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { Routes, Route } from "react-router-dom";
import { getItems, addItem, deleteItem } from "../../utils/api.js";

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
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItem(name, imageUrl, weather)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        getItems().then((data) => {
          setClothingItems(data);
        });
        closeModalClick();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (itemId) => {
    deleteItem(itemId)
      .then(() => {
        getItems().then((data) => {
          setClothingItems(data);
        });
        closeModalClick();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey).then((coordinates) => {
      setWeatherData(filterWeatherData(coordinates));
    });
    getItems().then((data) => {
      setClothingItems(data);
    });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header openModalClick={openModalClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  openCardClick={openCardClick}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  openModalClick={openModalClick}
                  clothingItems={clothingItems}
                  onCardClick={openCardClick}
                />
              }
            ></Route>
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
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
