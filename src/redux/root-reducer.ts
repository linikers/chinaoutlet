import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";


export interface RootState {
    user: UserState
}
export interface UserState {
    currentUser: string | null;
}


export const rootReducer = combineReducers({
    user: userReducer
})
export type rootState = {
    user: UserState
}
