import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ProjectCard.css";
import { useContext, useState } from "react";

function ProductCard({ card, onCardClick, handleCartClick }) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  const [isInCart, setIsInCart] = useState(false);

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  return (
    <li
      className='card'
      style={{ backgroundImage: `url(${card.image})` }}
      onClick={() => {
        onCardClick(card);
      }}
    >
      <div className='card__header'>
        <p className='card__name'>{card.name}</p>
        {isLoggedIn && (
          <button
            className={setCartClassNames()}
            alt='card__cart-button'
            onClick={handleCartClick}
          >
            {isInCart ? "Add to Cart" : "In Cart"}
          </button>
        )}
      </div>
    </li>
  );
}

export default ProductCard;
