import { IProduct } from "../../data/products";
import { ICartItem } from "../store";
import { cartActionTypes } from "./types";

export interface AddProductAction {
  type: cartActionTypes.ADD_PRODUCT;
  payload: IProduct;
}
export interface RemoveProductAction {
  type: cartActionTypes.REMOVE_PRODUCT;
  payload: IProduct;
}
export interface AddQttProdAction {
  type: cartActionTypes.ADD_QTT_PROD;
  payload: IProduct;
}
export interface RemQttAction {
  type: cartActionTypes.REM_QTT_PROD;
  payload: IProduct;
}

export const addProductToCart = (product: IProduct) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload: product,
});

export const removeProductToCart = (
  product: IProduct
) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload: product,
});

export const decraseItemToCart = (product: ICartItem) => ({
  type: cartActionTypes.REM_QTT_PROD,
  payload: product,
})
export const increaseItemToCart = (product: ICartItem) => ({
  type: cartActionTypes.ADD_QTT_PROD,
  payload: product,
})