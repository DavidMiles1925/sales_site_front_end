import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./CardViewModal.css";

function CardViewModal({ closeActiveModal, children }) {
  const { currentUser, isInCart } = useContext(CurrentUserContext);

  function setCartClassNames() {
    return isInCart
      ? "card__cart-button card__cart-button_type_in-cart"
      : "card__cart-button";
  }

  return (
    <div className='modal modal__preview' onClick={closeActiveModal}>
      <div className='modal__container'>
        <button
          className='modal__close modal__close-item'
          onClick={closeActiveModal}
        />
        {children}
      </div>
    </div>
  );
}

export default CardViewModal;
