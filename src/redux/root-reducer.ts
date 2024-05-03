import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { CartState, UserState } from "./store";
import dialogReducer from "./dialog/dialogReducer";

export const rootReducer = combineReducers({
  openDialog: dialogReducer,
  user: userReducer,
  cart: cartReducer,
});
export type rootState = {
  openDialog: {isOpenDialog: boolean};
  user: UserState;
  cart: CartState;
};
