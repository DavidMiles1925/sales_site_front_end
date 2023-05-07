import ProductCard from "../ProductCard/ProductCard";
import "./CardsSection.css";

function CardsSection({ cards, selectCard, addToCart }) {
  // Filter Criteria

  return (
    <>
      <ul className='cards__cards'>
        {cards.map((card) => (
          <ProductCard
            key={card._id}
            card={card}
            selectCard={selectCard}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </>
  );
}

export default CardsSection;
