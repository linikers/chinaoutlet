import { CartState } from "../root-reducer"
import { cartActionTypes } from "./types"

export const addProductToCart = (payload: CartState) => {
    type: cartActionTypes.ADD_PRODUCT,
    payload,
}