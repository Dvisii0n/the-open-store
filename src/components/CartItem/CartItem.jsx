import { useState } from "react";
import CartItemStyles from "./CartItems.module.css";
import { getFilteredObject, roundNumber } from "../../scripts/utils";

import { useOutletContext } from "react-router";
import CartQuantityInput from "../CartQuantityInput/CartQuantityInput";

function CartItem({ itemInfo }) {
  const [cartItems, setCartItems] = useOutletContext();

  const [itemQuantity, setItemQuantity] = useState(
    cartItems[itemInfo.id].quantity,
  );

  function updateCartQuantity(newQuantity) {
    setCartItems({
      ...cartItems,
      [itemInfo.id]: { ...cartItems[itemInfo.id], quantity: newQuantity },
    });
  }

  function removeItem() {
    setCartItems({ ...getFilteredObject(cartItems, itemInfo.id) });
  }

  const total = roundNumber(itemQuantity * itemInfo.price);

  return (
    <div className={CartItemStyles.item}>
      <div className={CartItemStyles.imgContainer}>
        <img
          src={itemInfo.thumbnail}
          alt={`thumbnail of ${itemInfo.title}`}
          className={CartItemStyles.thumbnail}
        />
      </div>
      <div className={CartItemStyles.info}>
        <p className={CartItemStyles.title}>{itemInfo.title}</p>
        <p className={CartItemStyles.price}>Total: ${total ? total : "0.00"}</p>
        <CartQuantityInput
          prodQuantity={itemQuantity}
          setProdQuantity={setItemQuantity}
          updateCartQuantity={updateCartQuantity}
        />

        <button className={CartItemStyles.remove} onClick={removeItem}>
          Remove item
        </button>
      </div>
    </div>
  );
}

export default CartItem;
