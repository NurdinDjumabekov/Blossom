import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokenA: '',
  listfavorites: [],
};

const saveDataSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    changeTokenA: (state, action) => {
      state.tokenA = action.payload;
    },
    changeFavorites: (state, action) => {
      state.listfavorites = action.payload;
    },
  },
});
export const { changeTokenA, changeFavorites } = saveDataSlice.actions;

export default saveDataSlice.reducer;
