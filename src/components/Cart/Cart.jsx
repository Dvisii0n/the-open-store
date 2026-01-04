import { useOutletContext } from "react-router";
import CartStyles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const [cartItems] = useOutletContext();

  const cartItemsArr = Object.values(cartItems);

  if (!Object.keys(cartItems).length)
    return <p className={CartStyles.empty}>Your cart is empty</p>;
  return (
    <div className={CartStyles.cart}>
      {cartItemsArr.map((item) => (
        <CartItem key={item.info.id} itemInfo={item.info} />
      ))}
    </div>
  );
}

export default Cart;
