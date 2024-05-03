import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenDialog: false, 
    
  };
 
  export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
      setOpenDialog: (state, action) => {
        state.isOpenDialog = action.payload;
      },
      setCloseDialog: (state, action) => {
        state.isOpenDialog = action.payload;
      }
    }
  });

  export const { setCloseDialog, setOpenDialog} = dialogSlice.actions;
  export default dialogSlice.reducer