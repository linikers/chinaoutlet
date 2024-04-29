import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { ICartItem } from "../components/CartItem";

export interface UserState {
  currentUser: { name: string; pass: string } | null;
}

export interface CartState {
  products: ICartItem[];
  totalPrice: number;
}

export interface RootState {
  user: UserState;
  cart: CartState;
}

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export type rootState = {
  user: UserState;
  cart: CartState;
};
