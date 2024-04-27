import { IProduct } from "../../data/products";

export enum cartActionTypes {
  ADD_PRODUCT = "cart/addProduct",
  REMOVE_PRODUCT = "cart/removeProduct",
}
export type CartAction =
  | { type: cartActionTypes.ADD_PRODUCT; payload: IProduct }
  | { type: cartActionTypes.REMOVE_PRODUCT; payload: string };
