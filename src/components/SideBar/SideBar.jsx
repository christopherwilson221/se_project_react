import './Sidebar.css';
import avatar from "../../assets/avatar.png";

function Sidebar() {
    return (
    <div className='sidebar'>
        <img className="sidebar__avatar" src={avatar} alt="Default Avatar" />
        <p className="sidebar__username">Terrence Tegegnee</p>
    </div>
);
}

export default Sidebar;