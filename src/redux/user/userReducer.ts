//armazena state

import { RootState, UserState } from "../root-reducer"
import { userActionTypes, UserActions } from "./types"




const initialState: RootState = {
    user: {currentUser: null}
}
export const userReducer = (state = initialState, action: UserActions ): UserState => {
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