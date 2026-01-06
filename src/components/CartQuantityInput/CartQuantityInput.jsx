import CartQtyInputStyles from "./CartQuantityInput.module.css";

//modified quantity input component because this one changes product quantity inside the cart
function CartQuantityInput({
  prodQuantity,
  setProdQuantity,
  updateCartQuantity,
}) {
  function addOne() {
    const sum = prodQuantity + 1;
    setProdQuantity(sum);
    updateCartQuantity(sum);
  }

  function subtractOne() {
    if (prodQuantity > 1) {
      const diff = prodQuantity - 1;
      setProdQuantity(diff);
      updateCartQuantity(diff);
    }
  }

  function onChange(e) {
    const val = parseInt(e.target.value);
    if (val) {
      setProdQuantity(val);
      updateCartQuantity(val);
    } else {
      setProdQuantity(0);
      updateCartQuantity(0);
    }
  }

  return (
    <div className={CartQtyInputStyles.input}>
      <button
        className={`${CartQtyInputStyles.button} ${CartQtyInputStyles.left}`}
        onClick={subtractOne}
      >
        -
      </button>
      <input
        className={CartQtyInputStyles.numInput}
        type="number"
        min="1"
        value={prodQuantity}
        onChange={onChange}
      ></input>
      <button
        className={`${CartQtyInputStyles.button} ${CartQtyInputStyles.right}`}
        onClick={addOne}
      >
        +
      </button>
    </div>
  );
}

export default CartQuantityInput;
