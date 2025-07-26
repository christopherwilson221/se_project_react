import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';

function ClothesSection({openModalClick, onCardClick, clothingItems}) {
    return (
    <div className='clothes-section'>
        <div className='clothes-section__container'>
            <p className='clothes-section__title'>Your Items</p>
            <button className='clothes-section__button' onClick={openModalClick}>+Add New</button>
        </div> 
        <ul className="clothes-section__list">
          {clothingItems
            .map((item, index) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
    </div>
);
}

export default ClothesSection;