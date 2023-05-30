import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import CardViewModal from "../CardViewModal/CardViewModal";
import "./ProductViewModal.css";

function ProductViewModal({
  card,
  handleAddToCart,
  closeActiveModal,
  handleRemoveFromCart,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const { image, name, price, description } = card;
  const newImage = `data:image/png;base64, ${image}`;

  const isInCart = currentUser.cart.some((item) => item === card._id);

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
    <>
      <CardViewModal closeActiveModal={closeActiveModal}>
        <img className='modal__image' src={newImage} alt={card.name} />
        <div className='modal__info-wrapper'>
          <h2 className='modal__title'>{name}</h2>
          <div className='modal__description-wrapper'>
            <p className='modal__price'>${price}</p>
            <p className='modal__description'>{description}</p>
          </div>
          <button
            className={setCartClassNames()}
            alt='card__cart-button'
            onClick={handleCartClick}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </CardViewModal>
    </>
  );
}

export default ProductViewModal;
