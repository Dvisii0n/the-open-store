import QtyInputStyles from "./QuantityInput.module.css";

function QuantityInput({ prodQuantity, setProdQuantity }) {
  function addOne() {
    setProdQuantity(prodQuantity + 1);
  }

  function subtractOne() {
    if (prodQuantity > 1) return setProdQuantity(prodQuantity - 1);
  }

  function onChange(e) {
    const val = parseInt(e.target.value);
    val ? setProdQuantity(val) : setProdQuantity(0);
  }

  return (
    <div className={QtyInputStyles.input}>
      <button
        className={`${QtyInputStyles.button} ${QtyInputStyles.left}`}
        onClick={subtractOne}
      >
        -
      </button>
      <input
        className={QtyInputStyles.numInput}
        type="number"
        min="1"
        value={prodQuantity}
        onChange={onChange}
      ></input>
      <button
        className={`${QtyInputStyles.button} ${QtyInputStyles.right}`}
        onClick={addOne}
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;
