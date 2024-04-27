import { CartState } from "../root-reducer";
import { CartAction, cartActionTypes } from "./types";

const initialState: CartState = {
  cart: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
