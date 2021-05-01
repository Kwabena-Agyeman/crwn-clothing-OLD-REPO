export const addItemToCart = (cartItems, cartItemBeingAdded) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemBeingAdded.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemBeingAdded.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...cartItemBeingAdded, quantity: 1 }];
};
