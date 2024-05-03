import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenDialog: false, 
    
  };
 
  export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
      setOpenDialog: state => {
        state.isOpenDialog = true;
      },
      setCloseDialog: state => {
        state.isOpenDialog = false;
      }
    }
  });
  
  export const { setCloseDialog, setOpenDialog} = dialogSlice.actions;
  export default dialogSlice.reducer