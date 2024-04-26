//armazena state

import {  UserState } from "../root-reducer"
import { userActionTypes, UserActions } from "./types"

const initialState: UserState = {
    currentUser: null
}
export const userReducer = (state: UserState = initialState, action: UserActions ): UserState => {
    switch(action.type) {
        case userActionTypes.login:
            if(typeof action.payload.currentUser === "string") {

                return { ...state, currentUser: action.payload.currentUser }
            }
            return state
    }
    switch(action.type) {
        case userActionTypes.logout:
            return { ...state, currentUser: null }
    }
    return  state
}