import { useState } from "react";
import QuantityInput from "../QuantityInput/QuantityInput";
import ProductCardStyles from "./ProductCard.module.css";

function ProductCard({ productInfo }) {
  const [prodQuantity, setProdQuantity] = useState(1);

  return (
    <div className={ProductCardStyles.productCard}>
      <img
        className={ProductCardStyles.prodImg}
        src={productInfo.thumbnail}
        alt={`Image of ${productInfo.title}`}
        loading="lazy"
      ></img>
      <p className={ProductCardStyles.title}>
        {productInfo.title.toLowerCase()}
      </p>

      <p className={ProductCardStyles.price}>${productInfo.price}</p>
      <QuantityInput
        prodQuantity={prodQuantity}
        setProdQuantity={setProdQuantity}
      />
      <button className={ProductCardStyles.add}>Add to cart</button>
    </div>
  );
}
export default ProductCard;
