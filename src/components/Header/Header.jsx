import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoute";
import { useEffect } from "react";
import user from "../../../../se_project_express-main/models/user.js";

function Header({ openModalClick, weatherData }) {
  console.log("Header props:", { openModalClick, weatherData });
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left-container">
      <Link to="/">
      <img className="header_logo" alt="WTWR" src={logo} />
      </Link>
      
      <p className="header__date-and-location"> {currentDate}, {weatherData.city}</p>
      </div>
      <div className="header__right-container">
      <ToggleSwitch />
      <ProtectedRoute isLoggedIn={isLoggedIn()}>
      <button
        onClick={openModalClick}
        type="button"
        className="header__add-clothes-btn"
      > + Add clothes
      </button>
      </ProtectedRoute>
      <Link to="/profile" isLoggedIn={!isLoggedIn()}>
            <div className="header__user-container" isLoggedIn={!isLoggedIn()}>
        <p className="header__username">Terrence Tegegnee</p>
        <img
          src={avatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        ></img>
        </div>
        <div className="header__user-container" isLoggedIn={isLoggedIn()}>
        <p className="header__username"><User>{user.username}</User></p>
        <img
          src={avatar}
          alt="Username"
          className="header__avatar"
        ></img>
        </div>
      </Link>
      <Link to="/profile" isLoggedIn={isLoggedIn()}>
            <div className="header__user-container" isLoggedIn={!isLoggedIn()}>
        <p className="header__username">{username}</p>
        <img
          src={avatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        ></img>
        </div>
        <div className="header__user-container" isLoggedIn={isLoggedIn()}>
        <p className="header__username"><User>{user.username}</User></p>
        <img
          src={avatar}
          alt="Username"
          className="header__avatar"
        ></img>
        </div>
      </Link>
      </div>
    </header>
  );
}

export default Header;
