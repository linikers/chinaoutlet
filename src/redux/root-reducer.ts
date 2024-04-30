import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { CartState, UserState } from "./store";



export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export type rootState = {
  user: UserState;
  cart: CartState;
};
