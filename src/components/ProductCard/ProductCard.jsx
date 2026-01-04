import { useState } from "react";
import QuantityInput from "../QuantityInput/QuantityInput";
import ProductCardStyles from "./ProductCard.module.css";
import { useOutletContext } from "react-router";

function ProductCard({ productInfo }) {
  const [prodQuantity, setProdQuantity] = useState(1);
  const [cartItems, setCartItems] = useOutletContext();

  function addToCart(productInfo) {
    const obj = { quantity: prodQuantity, info: productInfo };
    setCartItems({ ...cartItems, [productInfo.id]: obj });
  }
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
      <button
        className={ProductCardStyles.add}
        onClick={() => addToCart(productInfo)}
      >
        Add to cart
      </button>
    </div>
  );
}
export default ProductCard;
