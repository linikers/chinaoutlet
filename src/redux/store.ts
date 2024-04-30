import { createStore } from "@reduxjs/toolkit"
import { rootReducer } from "./root-reducer"
import { IProduct } from "../data/products";

// export interface ICartStat
export interface UserState {
    currentUser: { name: string; pass: string } | null;
  }
  
  export interface CartState {
    cartItems?: ICartItem[];
    products: ICartItem[];
    totalPrice: number;
  }
  export interface ICartItem extends IProduct {
    quantity: number | 0;
  }
  export interface ICartItemProps {
    product: ICartItem;
    quantity: number;
  }
  export interface IAppState {
    cart: CartState;
    user: UserState;
  }
  
  export interface rootState {
    user: UserState;
    cart: CartState;
  }
  
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>