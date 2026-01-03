import ProductCardStyles from "./ProductCard.module.css";

function ProductCard({ productInfo }) {
  return (
    <div className={ProductCardStyles.productCard}>
      <img
        className={ProductCardStyles.prodImg}
        src={productInfo.thumbnail}
        alt={`Image of ${productInfo.title}`}
      ></img>
      <p className={ProductCardStyles.title}>
        {productInfo.title.toLowerCase()}
      </p>

      <p className={ProductCardStyles.price}>${productInfo.price}</p>

      <p className={ProductCardStyles.rating}>{productInfo.rating}</p>
    </div>
  );
}
export default ProductCard;
