import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { CartState, UserState } from "./store";
import openDialogReducer from "./dialog/dialogReducer";



export const rootReducer = combineReducers({
  openDialog: openDialogReducer,
  user: userReducer,
  cart: cartReducer,
});
export type rootState = {
  user: UserState;
  cart: CartState;
};
