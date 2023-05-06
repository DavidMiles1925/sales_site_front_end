import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ProjectCard.css";

function ProductCard({ card, selectCard, handleCartClick }) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  const [isInCart, setIsInCart] = useState(false);

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  useEffect(() => {
    console.log(card.image);
  }, []);

  return (
    <li
      className='card'
      style={{ backgroundImage: `url(${card.image})` }}
      onClick={() => {
        selectCard(card);
      }}
    >
      <img src='./images/transmogrofier.jpg' alt='Product' />
      <div className='card__header'>
        <p className='card__name'>{card.name}</p>
        <p className='card__price'>{`$${card.price}`}</p>
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
