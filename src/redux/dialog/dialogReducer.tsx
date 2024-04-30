

const initialState = {
    openDialog: false, 
    
  };
  interface IOpenDialogState {
    openDialog: boolean;
    type: 'SET_OPEN_DIALOG' | 'SET_CLOSE_DIALOG';
  }
  
 
  export default function openDialogReducer(state = initialState, action: IOpenDialogState) {
    switch (action.type) {
      case 'SET_OPEN_DIALOG':
        return {
          ...state,
          openDialog: true, 
        };
        case 'SET_CLOSE_DIALOG':
        return {
          ...state,
          openDialog: false, 
        };
      default:
        return state;
    }
  }
  