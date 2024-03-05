import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },
  listPrice: [
    { id: 1, name: "до 2 0000 сом", active: false },
    { id: 2, name: "2 0000 - 4 0000 сом", active: false },
    { id: 3, name: "4 0000 - 8 0000 сом", active: false },
    { id: 4, name: "8 0000 - 15 0000 сом", active: false },
    { id: 5, name: "от 15 0000 сом", active: false },
  ],
  lookPrice: false,
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },
    changeListPrice: (state, action) => {
      state.listPrice = action.payload;
    },
    changeLookPrice: (state, action) => {
      state.lookPrice = action.payload;
    },
  },
});

export const { changeAlertText, changeListPrice, changeLookPrice } =
  stateSlice.actions;

export default stateSlice.reducer;
