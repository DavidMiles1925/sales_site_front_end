import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ProductCard.css";

function ProductCard({
  card,
  handleCardClick,
  handleAddToCart,
  handleRemoveFromCart,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const { image, price, name } = card;
  const newImage = `data:image/png;base64, ${image}`;

  const isInCart = currentUser
    ? currentUser.cart.some((item) => item === card._id)
    : false;

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  function handleCartClick(e) {
    e.stopPropagation();
    if (isInCart) {
      handleRemoveFromCart(card._id);
    } else {
      handleAddToCart(card._id);
    }
  }

  return (
    <li
      className='card'
      onClick={() => {
        handleCardClick(card);
      }}
    >
      <div className='card__image-container'>
        <img className='card__image' src={newImage} alt='Product' />
      </div>
      <div className='card__header'>
        <div className='card__text-container'>
          <p className='card__text card__price'>{`$${price}`}</p>
          <p className='card__text card__name'>{name}</p>
        </div>
      </div>
      <div className='card__cart-button-container'>
        <button
          className={setCartClassNames()}
          alt='card__cart-button'
          onClick={handleCartClick}
        >
          {!isInCart ? "Add to Cart" : "Remove from Cart"}
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
