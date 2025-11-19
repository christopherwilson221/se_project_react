import Sidebar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';

function Profile({ onCardClick, clothingItem, handleAddClick, onLogoutClick, OnEditClick, onClose, onCardLike }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar  onLogoutClick={onLogoutClick} OnEditClick={OnEditClick} onClose={onClose}/>
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItem={clothingItem}
          handleAddClick={handleAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;