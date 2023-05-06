import CardsSection from "../CardsSection/CardsSection";
import "./ProductsPage.css";

function ProductsPage({ productList, selectCard, handleCartClick }) {
  return (
    <div className='products'>
      <div className='products__side-bar'>
        <h2 className='products__title'>Products</h2>
      </div>
      <CardsSection
        cards={productList}
        selectCard={selectCard}
        handleCartClick={handleCartClick}
      />
    </div>
  );
}

export default ProductsPage;
