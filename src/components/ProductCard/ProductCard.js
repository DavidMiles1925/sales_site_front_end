import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ProjectCard.css";

function ProductCard({ card, selectCard, addToCart }) {
  const [isInCart, setIsInCart] = useState(false);

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  return (
    <li
      className='card'
      onClick={() => {
        selectCard(card);
      }}
    >
      <div className='card__image-container'>
        <img
          className='card__image'
          src='./images/transmogrofier.jpg'
          alt='Product'
        />
      </div>
      <div className='card__header'>
        <div className='card__text-container'>
          <p className='card__text card__price'>{`$${card.price}`}</p>
          <p className='card__text card__name'>{card.name}</p>
        </div>
        <div className='card__cart-button-container'>
          <button
            className={setCartClassNames()}
            alt='card__cart-button'
            onClick={addToCart}
          >
            {!isInCart ? "Add to Cart" : "In Cart"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
