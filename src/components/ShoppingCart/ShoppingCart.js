import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProductCard from "../ProductCard/ProductCard";
import "./ShoppingCart.css";

function ShoppingCart({
  productList,
  handleCardClick,
  handleAddToCart,
  handleRemoveFromCart,
  history,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const items = productList.filter((product) =>
    currentUser.cart.some((item) => item === product._id)
  );

  return (
    <div className='cart'>
      <div className='cart-container'>
        <div className='cart__title-container'>
          <h2 className='cart__title'>Cart</h2>
          <button
            className='cart__submit'
            type='submit'
            onClick={() => {
              history.push("/userprofile/building");
            }}
          >
            Checkout
          </button>
        </div>
        <div className='cart__divider' />
        <div className='cart__item-section'>
          {items.map((cartItem) => (
            <ProductCard
              key={cartItem._id}
              card={cartItem}
              handleCardClick={handleCardClick}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default ShoppingCart;
