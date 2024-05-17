import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./root-reducer"
import { IProduct } from "../data/products";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// export interface ICartStat
export interface UserState {
    currentUser: { name: string; pass: string } | null;
  }
  
  export interface CartState {
    cartItems?: ICartItem[];
    products: ICartItem[];
    totalPrice: number;
    openDialog: false;
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
 
  const persistConfig = {
    key: "root",
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);