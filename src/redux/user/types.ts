export enum userActionTypes  {
    login = "user/login",
    logout = "user/logout",
}

export type UserActions =  
| { type: userActionTypes.login; payload: { currentUser: string } } 
| { type: userActionTypes.logout}
