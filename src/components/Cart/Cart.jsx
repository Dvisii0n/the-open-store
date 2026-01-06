import { useOutletContext } from "react-router";
import CartStyles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import { getItemCount } from "../../scripts/utils";

function Cart() {
  const [cartItems] = useOutletContext();

  const cartItemsArr = Object.values(cartItems);

  if (!Object.keys(cartItems).length)
    return <p className={CartStyles.empty}>Your cart is empty</p>;
  return (
    <div className={CartStyles.cart}>
      <div className={CartStyles.cartList}>
        <p>Total items: {getItemCount(cartItems)}</p>
        {cartItemsArr.map((item) => (
          <CartItem key={item.info.id} itemInfo={item.info} />
        ))}
      </div>
      <Checkout />
    </div>
  );
}

export default Cart;
