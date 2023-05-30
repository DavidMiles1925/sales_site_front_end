import { useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { productCatalog } from "../../utils/constants";
import CardsSection from "../CardsSection/CardsSection";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import "./ProductsPage.css";

function ProductsPage({
  productList,
  handleCardClick,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  const [currentCategory, setCurrentCategory] = useState("all");

  const dropdownOptions = {
    openOnWideScreen: true,
    titleText: "Products",
    dropdownItems: productCatalog,
  };

  return (
    <FilterContext.Provider value={{ currentCategory, setCurrentCategory }}>
      <div className='products'>
        <div className='products__side-bar'>
          <SideBarMenu dropdownOptions={dropdownOptions} />
        </div>
        <CardsSection
          cards={productList}
          handleCardClick={handleCardClick}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </FilterContext.Provider>
  );
}

export default ProductsPage;
