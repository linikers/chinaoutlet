//armazena state

// interface IUSer {
//     currentUser: string,
//     pass: string,
// }
const initialState = {
    currentUser: null
}
export const userReducer = (state = initialState, action) => {

    if(action.type === "user/login") {
        return { ...state, currentUser: 10}
    }
    return (
        state
    )
}