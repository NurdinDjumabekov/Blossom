import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularCategory = createAsyncThunk(
  "getPopularCategory",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: "http://glossom.333.kg/api/get_categoty",
      });
      if (response.status >= 200 && response.status < 300) {
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  preloader: false,
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPopularCategory.fulfilled, (state, action) => {
      state.preloader = false;
      state.categories = action.payload;
    });
    builder.addCase(getPopularCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getPopularCategory.pending, (state, action) => {
      state.preloader = true;
    });
  },
  reducers: {},
});
export const { changeTypeSecretarDela } = requestSlice.actions;

export default requestSlice.reducer;
