import { DialogAction } from "./actions";


const initialState = {
    openDialog: false, 
    
  };
 
  export default function dialogReducer(state = initialState, action: DialogAction) {
    switch (action.type) {
      case 'SET_OPEN_DIALOG':
        return {
          ...state,
          isOpenDialog: true, 
        };
        case 'SET_CLOSE_DIALOG':
        return {
          ...state,
          isOpenDialog: false, 
        };
      default:
        return state;
    }
  }
  