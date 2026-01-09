import React from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar({ onLogoutClick, onEditClick }) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={currentUser.avatar || avatar} alt="Default Avatar" />
      <p className="sidebar__username">{currentUser.name || "Placeholder"}</p>
      <div className="sidebar__log">
        <button
          className="sidebar__change"
          onClick={onEditClick}
          type="button"
          >
            Change profile data
        </button>
        <button
          className="sidebar__logout"
          type="button"
          onClick={onLogoutClick}
        >
          Log out   
          </button>
    </div>
    </div>
  );
}

export default Sidebar;
