import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  loginMode: true,
  loginSuccessful: false,
  signupSuccessful: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoginMode: (state) => {
      state.loginMode = !state.loginMode;
    },
    integrateUsersFromServer: (state, action) => {
      const newData = action.payload;
      newData.forEach((item) => {
        const exists = state.user.some(
          (existingItem) => existingItem.id === item.id
        );
        if (!exists) {
          state.user.push(item);
        }
      });
    },
    findUserLogin: (state, action) => {
      const inputEmail = action.payload.email;
      const inputPassword = action.payload.password;
      const userCheck = state.user.find((dt) => {
        return inputEmail === dt.email && inputPassword === dt.password;
      });
      if (userCheck) {
        console.log("Login Successfully!");
        state.loginSuccessful = true;
      } else {
        console.error("There is no such User!");
        state.loginSuccessful = false;
      }
    },
    toggleLoginSuccessful: (state) => {
      state.loginSuccessful = !state.loginSuccessful;
    },
    findUserSignUp: (state, action) => {
      const inputEmail = action.payload.email;
      const userCheck = state.user.find((dt) => {
        return inputEmail === dt.email;
      });
      if (userCheck) {
        state.signupSuccessful = false;
        throw new Error("There is such a registered e-mail!");
      } else {
        console.log("There is not such a registered e-mail!");
        state.signupSuccessful = true;
      }
    },
    createNewAccount: (state, action) => {
      state.user = [...state.user, action.payload];
      console.log(state.user);
    },
    toggleSignupSuccessful: (state) => {
      state.signupSuccessful = !state.signupSuccessful;
    },
  },
});

export const {
  toggleLoginMode,
  integrateUsersFromServer,
  findUserLogin,
  toggleLoginSuccessful,
  findUserSignUp,
  createNewAccount,
  toggleSignupSuccessful,
} = userSlice.actions;

export default userSlice.reducer;
