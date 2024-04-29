import { IProduct } from "../../data/products";

export enum cartActionTypes {
  ADD_PRODUCT = "cart/addProduct",
  REMOVE_PRODUCT = "cart/removeProduct",
  ADD_QTT_PROD = "cart/addQttProd",
  REM_QTT_PROD = "cart/remQttProd",
}
export type CartAction =
  | { type: cartActionTypes.ADD_PRODUCT; payload: IProduct }
  | { type: cartActionTypes.REMOVE_PRODUCT; payload: string }
  | { type: cartActionTypes.ADD_QTT_PROD; payload: string }
  | { type: cartActionTypes.REM_QTT_PROD; payload: string };
