import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  userInfo : {},
  userToken : null,
  
}

const memberSlice = createSlice({
  name:'member',
  initialState,
  reducers:{
    getUserInfo : (state,{payload})=>{
      state.userInfo = payload;
    },
    getUserToken : (state,{payload})=>{
      state.userToken = payload;
    },
    logout : (state)=>{
      state.userToken = null;
    }

  }

});

export default memberSlice.reducer;
export const {getUserInfo,getUserToken,logout} = memberSlice.actions;
