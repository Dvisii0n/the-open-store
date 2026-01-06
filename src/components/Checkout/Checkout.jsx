import { useOutletContext } from "react-router";
import CheckoutStyles from "./Checkout.module.css";
import { roundNumber } from "../../scripts/utils";

function Checkout() {
  const [cartItems] = useOutletContext();

  const shipping = 20.24;
  const tax = roundNumber(getTotal() * 0.16);

  function getTotal() {
    const cartItemsArr = Object.values(cartItems);
    return roundNumber(cartItemsArr.reduce((sum, val) => sum + val.total, 0));
  }

  return (
    <div className={CheckoutStyles.checkout}>
      <p>Shipping: ${shipping}</p>
      <p>Tax (16%): ${tax}</p>
      <p className={CheckoutStyles.total}>
        Total: ${roundNumber(getTotal() + tax) || 0}
      </p>
      <button
        className={CheckoutStyles.button}
        onClick={() => {
          alert("Under construction");
        }}
      >
        Checkout
      </button>
      <p className={CheckoutStyles.refunds}>
        <em>*No refunds</em>
      </p>
    </div>
  );
}

export default Checkout;
