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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id;
    });
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToRemove.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};
