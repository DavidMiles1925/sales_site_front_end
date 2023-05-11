import { useState } from "react";
import CardsSection from "../CardsSection/CardsSection";
import "./ProductsPage.css";

function ProductsPage({ productList }) {
  return (
    <div className='products'>
      <div className='products__side-bar'>
        <h2 className='products__title'>Products</h2>
      </div>
      <div className='products__wrapper'>
        <CardsSection cards={productList} />
      </div>
    </div>
  );
}

export default ProductsPage;
