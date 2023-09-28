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
    setUserID: (state, action) => {
      localStorage.setItem("userID", action.payload);
      console.log(state.userID);
    },
  },
});

export const { createLocalToken, signOut, setUserID } = authSlice.actions;

export default authSlice.reducer;
