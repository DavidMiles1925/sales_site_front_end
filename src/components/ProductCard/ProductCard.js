import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ProjectCard.css";

function ProductCard({ card, handleCardClick, addToCart }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isInCart = currentUser.cart.some((item) => item === card._id);

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  return (
    <li
      className='card'
      onClick={() => {
        handleCardClick(card);
      }}
    >
      <div className='card__image-container'>
        <img className='card__image' src={card.image} alt='Product' />
      </div>
      <div className='card__header'>
        <div className='card__text-container'>
          <p className='card__text card__price'>{`$${card.price}`}</p>
          <p className='card__text card__name'>{card.name}</p>
        </div>
      </div>
      <div className='card__cart-button-container'>
        <button
          className={setCartClassNames()}
          alt='card__cart-button'
          onClick={addToCart}
        >
          {!isInCart ? "Add to Cart" : "Remove From Cart"}
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
