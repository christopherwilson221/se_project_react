import React from "react";
import headerAvater from "../../assets/avatar.png";
import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function Sidebar({ onLogoutClick, onEditClick }) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default Avatar" />
      <p className="sidebar__username">{currentUser.name || "Placeholder"}</p>
      <div className="sidebar__log">
        <button
          className="sidebar__edit-button"
          onClick={onEditClick}
          >
            Change profile data
        </button>
        <button
          className="sidebar__logout-button"
          onClick={onLogoutClick}
        >
          Log out   
          </button>
    </div>
    </div>
  );
}

export default Sidebar;
