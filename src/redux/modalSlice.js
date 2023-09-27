import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  warningModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalFunc: (state) => {
      state.modal = !state.modal;
    },
    warningModalFunc: (state) => {
      state.warningModal = !state.warningModal;
    },
  },
});

export const { modalFunc, warningModalFunc } = modalSlice.actions;

export default modalSlice.reducer;
