import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}


let userSlice = createSlice({
  name: "User",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: () => initialState
  }
});

export const { loginStart, loginFailure, loginSuccess, logOut } =
  userSlice.actions;
export default userSlice.reducer;
