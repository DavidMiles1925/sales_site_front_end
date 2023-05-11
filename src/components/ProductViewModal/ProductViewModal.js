import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import CardViewModal from "../CardViewModal/CardViewModal";
import "./ProductViewModal.css";

function ProductViewModal({ card, addToCart, closeActiveModal }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isInCart = currentUser.cart.some((item) => item === card._id);

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  return (
    <>
      <CardViewModal closeActiveModal={closeActiveModal}>
        <img className='modal__image' src={card.image} alt={card.name} />
        <div className='modal__info-wrapper'>
          <h2 className='modal__title'>{card.name}</h2>
          <div className='modal__description-wrapper'>
            <p className='modal__price'>${card.price}</p>
            <p className='modal__description'>{card.description}</p>
          </div>
          <button
            className={setCartClassNames()}
            alt='card__cart-button'
            onClick={addToCart}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </button>
        </div>
      </CardViewModal>
    </>
  );
}

export default ProductViewModal;
