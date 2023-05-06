import "./ProductsPage.css";

function ProductsPage({ productList }) {
  return (
    <div className='products'>
      <div className='products__side-bar'>
        <h2 className='products__title'>Products</h2>
      </div>
      <div className='products__wrapper'></div>
    </div>
  );
}

export default ProductsPage;
