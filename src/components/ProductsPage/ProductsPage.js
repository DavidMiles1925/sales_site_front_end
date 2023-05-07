import CardsSection from "../CardsSection/CardsSection";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import "./ProductsPage.css";
import { productCatalog } from "../../utils/constants";

function ProductsPage({ productList, selectCard, addToCart }) {
  const dropdownOptions = {
    openOnWideScreen: true,
    defaultOpen: true,
    titleText: "Products",
    dropdownItems: productCatalog,
  };

  return (
    <div className='products'>
      <div className='products__side-bar'>
        <SideBarMenu dropdownOptions={dropdownOptions} />
      </div>
      <CardsSection
        cards={productList}
        selectCard={selectCard}
        addToCart={addToCart}
      />
    </div>
  );
}

export default ProductsPage;
