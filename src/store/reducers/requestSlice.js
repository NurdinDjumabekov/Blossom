import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getPopularCategory = createAsyncThunk(
  "getPopularCategory",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/get_categoty`,
      });
      if (response.status >= 200 && response.status < 300) {
        return; /////////
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMainProd = createAsyncThunk(
  "getMainProd",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/main_prod`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getToys = createAsyncThunk(
  "getToys",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/toys`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSweets = createAsyncThunk(
  "getSweets",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/sweets`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTopCategory = createAsyncThunk(
  "getTopCategory",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/top_categ`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
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
  listFlowers: [],
  listToys: [],
  listSweets: [],
  listTopCategory: [],
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    //////////////// getPopularCategory
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
    //////////////// getMainProd
    builder.addCase(getMainProd.fulfilled, (state, action) => {
      state.preloader = false;
      state.listFlowers = action.payload;
    });
    builder.addCase(getMainProd.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getMainProd.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getToys
    builder.addCase(getToys.fulfilled, (state, action) => {
      state.preloader = false;
      state.listToys = action.payload;
    });
    builder.addCase(getToys.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getToys.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getSweets
    builder.addCase(getSweets.fulfilled, (state, action) => {
      state.preloader = false;
      state.listSweets = action.payload;
    });
    builder.addCase(getSweets.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getSweets.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getTopCategory
    builder.addCase(getTopCategory.fulfilled, (state, action) => {
      state.preloader = false;
      state.listTopCategory = action.payload;
    });
    builder.addCase(getTopCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getTopCategory.pending, (state, action) => {
      state.preloader = true;
    });
  },
  reducers: {},
});
export const { changeTypeSecretarDela } = requestSlice.actions;

export default requestSlice.reducer;
