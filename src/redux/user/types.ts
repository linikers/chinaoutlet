export enum userActionTypes  {
    login = "user/login",
    logout = "user/logout",
}

export type UserActions =  
| { type: userActionTypes.login; payload: { currentUser: {name: string , pass: string } } } 
| { type: userActionTypes.logout}
