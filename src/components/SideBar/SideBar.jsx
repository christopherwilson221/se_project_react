import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { isLoggedIn } from "../../utils/auth.js";

function Sidebar() {
    return (
    <div className='sidebar'>
        <img className="sidebar__avatar" src={avatar} alt="Default Avatar" />
        <p className="sidebar__username">Terrence Tegegnee</p>
    </div>
);
}

function editProfile() {
    if (isLoggedIn()) {
        
    // Functionality to edit profile goes here
}   

function signOut() {
    if (isLoggedIn()) {
    // Functionality to sign out goes here
}
}

export default Sidebar;