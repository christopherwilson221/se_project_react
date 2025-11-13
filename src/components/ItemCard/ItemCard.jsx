import "./ItemCard.css";
import { isLoggedIn } from "../../utils/auth.js";

function ItemCard({ item, onCardClick }) {
  if (isLoggedIn()) {
  return (
    <li className="card" key={item._id}>
      <h2 className="card__name">{item.name}</h2>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={ () => {
          onCardClick(item)
        }}
      />
    </li>
  );
}}

export default ItemCard;
