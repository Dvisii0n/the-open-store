export function roundNumber(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function getFilteredObject(object, keyToRemove) {
  const objectCopy = object;
  delete objectCopy[keyToRemove];
  return objectCopy;
}

export function getItemCount(cartItems) {
  const arr = Object.values(cartItems);
  return arr.reduce((sum, val) => sum + val.quantity, 0);
}
