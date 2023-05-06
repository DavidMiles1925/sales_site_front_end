import ProductCard from "../ProductCard/ProductCard";
import "./CardsSection.css";

function CardsSection({ cards, selectCard, handleCartClick }) {
  // Filter Criteria

  return (
    <>
      <ul className='cards__cards'>
        {cards.map((card) => (
          <ProductCard
            key={card._id}
            card={card}
            selectCard={selectCard}
            handleCartClick={handleCartClick}
          />
        ))}
      </ul>
    </>
  );
}

export default CardsSection;
