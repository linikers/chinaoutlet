import { CartState, ICartItem } from "../store";

import { CartAction, cartActionTypes } from "./types";

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  openDialog: false
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  let prodIsAlreadyCart: boolean;
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT:
      prodIsAlreadyCart = state.products.some(
        (product) => product.id === action.payload.id 
      );

      if (prodIsAlreadyCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: (product.quantity ?? 0) + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 } as ICartItem],
      };

    case cartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };

    case cartActionTypes.ADD_QTT_PROD:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: (product.quantity ?? 0) + 1 }
            : product
        ),
      };

    case cartActionTypes.REM_QTT_PROD:
      return {
        ...state,
        products: state.products.map((product) => product.id === action.payload ? {
          ...product,
          quantity: Math.max((product.quantity ?? 0) -1 , 0)
        }
        : product
        )
      };
    default:
      return state;
  }
};
