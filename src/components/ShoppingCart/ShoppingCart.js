import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProductCard from "../ProductCard/ProductCard";
import "./ShoppingCart.css";

function ShoppingCart({
  productList,
  handleCardClick,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const items = productList.filter((product) =>
    currentUser.cart.some((item) => item === product._id)
  );

  return (
    <div className='cart'>
      <div className='cart-container'>
        <h2 className='cart__title'>Cart</h2>
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
