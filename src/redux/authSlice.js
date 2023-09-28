import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("jwtToken") || "",
  userID: localStorage.getItem("userID") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createLocalToken: (state, action) => {
      state.token = action.payload;
      console.log(state.token);
    },
    signOut: (state) => {
      state.token = null;
      state.userID = null;
    },
  },
});

export const { createLocalToken, signOut } = authSlice.actions;

export default authSlice.reducer;
