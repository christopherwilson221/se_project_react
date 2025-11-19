import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import Profile from "../Profile/Profile.jsx";
import React, { useEffect, useState } from "react";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getItems, addItem, deleteItem, addCardLike, removeCardLike, editUser } from "../../utils/api.js";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { getToken, removeToken, setToken } from "../../utils/auth.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ email: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setToken();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    removeToken();
  };

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
    if (isLoggedIn) {
      setClothingItems((prevItems) => [
        ...prevItems,
        addItem(name, imageUrl, weather)
          .then((newItem) => {
            setClothingItems((prevItems) => [newItem, ...prevItems]);
            closeModalClick();
          })
          .catch(console.error),
      ]);
    }
  };

  const handleDeleteItem = (itemId) => {
    if (isLoggedIn) {
      deleteItem(itemId)
        .then(() => {
          setClothingItems((prevItems) =>
            prevItems.filter((item) => item._id !== itemId)
          );
          closeModalClick();
        })
        .catch(console.error);
    }
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleRegistration = ({ email, password, confirmPassword }) => {
    if (password === confirmPassword) {
      auth
        .register(email, password)
        .then((data) => {
          if (data.jwt) {
            setToken(data.jwt);
            setUserData(data.user);
            handleLogin();
            navigate("/login");
          }
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    const owner = localStorage.getItem("userId");
    console.log("Current owner:", owner);
    console.log("Items before filtering:", items);
    const filteredItems = items.filter((item) => item.owner === owner);
    console.log("Filtered items:", filteredItems);
    getWeather(coordinates, APIkey).then((coordinates) => {
      setWeatherData(filterWeatherData(coordinates));
    });
    getItems().then((data) => {
      setClothingItems(data);
    });
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    api
      .getUserInfo(jwt)
      .then(({ email }) => {
        setIsLoggedIn(true);
        setUserData({ email });
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header openModalClick={openModalClick} weatherData={weatherData} isLoggedIn={isLoggedIn} />
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
                  element={<ProtectedRoute isLoggedIn={isLoggedIn} />}
                />
              }
            ></Route>
          </Routes>
          <Footer />
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            closeModalClick={closeModalClick}
            onAddItemModalSubmit={handleAddItemModalSubmit}
            isLoggedIn={isLoggedIn}
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
