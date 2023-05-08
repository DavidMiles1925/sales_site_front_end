import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CardsSection.css";
import { FilterContext } from "../../contexts/FilterContext";

function CardsSection({ cards, handleCardClick, addToCart }) {
  const { currentCategory } = useContext(FilterContext);

  return (
    <>
      <ul className='cards__cards'>
        {cards
          .filter(
            (card) =>
              card.category === currentCategory || currentCategory === "all"
          )
          .map((fiteredCard) => (
            <ProductCard
              key={fiteredCard._id}
              card={fiteredCard}
              handleCardClick={handleCardClick}
              addToCart={addToCart}
            />
          ))}
      </ul>
    </>
  );
}

export default CardsSection;
