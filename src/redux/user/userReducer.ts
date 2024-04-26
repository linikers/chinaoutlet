//armazena state

import {  UserState } from "../root-reducer"
import { userActionTypes, UserActions } from "./types"

const initialState: UserState = {
    currentUser: null
}
export const userReducer = (state: UserState = initialState, action: UserActions ): UserState => {
    switch(action.type) {
        case userActionTypes.login:
            console.log('dispatch login', action.payload)
                return { ...state, currentUser: action.payload }
    
        
        case userActionTypes.logout:
            console.log('dispatch logoff')
            return { ...state, currentUser: null }
        
        default:
            return state
    }

}