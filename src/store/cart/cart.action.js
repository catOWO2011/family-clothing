import { createAction } from "@reduxjs/toolkit";

import { CART_ACTION_TYPES } from "./cart.types";

const addProductToCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === existingCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN);

export const addItemToCart = createAction(
  CART_ACTION_TYPES.SET_CART_ITEMS,
  (cartItems, productToAdd) => {
    const newCartItems = addProductToCartItem(cartItems, productToAdd);
    return {
      payload: newCartItems,
    };
  }
);

export const removeItemToCart = createAction(
  CART_ACTION_TYPES.SET_CART_ITEMS,
  (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return {
      payload: newCartItems,
    };
  }
);

export const clearItemFromCart = createAction(
  CART_ACTION_TYPES.SET_CART_ITEMS,
  (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return {
      payload: newCartItems,
    };
  }
);
