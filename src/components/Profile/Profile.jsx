import Sidebar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';

function Profile({openModalClick, onCardClick, clothingItems}) {
    return (
    <div className='profile'>
    <section className='profile__sidebar'>
        <Sidebar />
    </section>
    <section className="profile__clothing-items">
        <ClothesSection onCardClick={onCardClick} clothingItems={clothingItems} openModalClick={openModalClick}/>
    </section>
    </div>
);
}

export default Profile;