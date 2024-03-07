import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getMainProd = createAsyncThunk(
  "getMainProd",
  async function (info, { dispatch, rejectWithValue }) {
    /// все цветы 10440
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/main_prod?id=10440`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSortData = createAsyncThunk(
  "getSortData",
  async function (info, { dispatch, rejectWithValue }) {
    /// все товары
    const { start, end, type } = info;
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/get_prod?type=${type}&start=${start}&end=${end}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
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
    /// для игрушек
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/main_prod?id=10412`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
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
    //// для конфет
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/main_prod?id=10411`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getRose = createAsyncThunk(
  "getRose",
  async function (info, { dispatch, rejectWithValue }) {
    //// для роз 10414
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/main_prod?id=10414`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPions = createAsyncThunk(
  "getPions",
  async function (info, { dispatch, rejectWithValue }) {
    //// Пионы 10416
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/main_prod?id=10416`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOtherData = createAsyncThunk(
  "getOtherData",
  async function (id, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/more?id=${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getRoseSort = createAsyncThunk(
  "getRoseSort", /// розы с сортировкой данных
  async function (sort, { dispatch, rejectWithValue }) {
    //// для роз 10414
    try {
      const response = await axios({
        method: "GET",
        // url: `${REACT_APP_API_URL}/api/rose?id=10414`,
        url: `${REACT_APP_API_URL}/api/main_prod?id=10414`, /// временно
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
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
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTopFlowers = createAsyncThunk(
  "getTopFlowers",
  async function (info, { dispatch, rejectWithValue }) {
    /// все цветы 10440(топ 30)
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/top_flowers`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEveryData = createAsyncThunk(
  "getEveryData",
  async function (id, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/api/every?id=${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.[0];
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createZakaz = createAsyncThunk(
  "createZakaz",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "POST",
        url: `${REACT_APP_API_URL}/api/create_zakaz`,
        data: {
          ...info,
        },
      });
      if (response.status >= 200 && response.status < 300) {
        // return response?.data?.recordset;
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
  mainList: [],
  listToys: [],
  listSweets: [],
  listTopCategory: [],
  listRose: [], //// розы 10414  /// для каталога
  listPions: [], //// пионы 10416  /// для каталога
  listSortRose: [], //// для страницы роз
  morelist: [],
  otherData: [],
  everyFlowers: {},

  zakaz: {
    zakaz_summ: 0,
    zakaz_comment: "",
    client_fio: "",
    client_phone: "",
    zakaz_date: "",
    address_from: "",
    address_to: "",
    summ_chek: "",
  },
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
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
    //////////////// getSortData
    builder.addCase(getSortData.fulfilled, (state, action) => {
      state.preloader = false;
      state.mainList = action.payload;
    });
    builder.addCase(getSortData.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getSortData.pending, (state, action) => {
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
    //////////////// getRose
    builder.addCase(getRose.fulfilled, (state, action) => {
      state.preloader = false;
      state.listRose = action.payload;
    });
    builder.addCase(getRose.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getRose.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getPions
    builder.addCase(getPions.fulfilled, (state, action) => {
      state.preloader = false;
      state.listPions = action.payload;
    });
    builder.addCase(getPions.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getPions.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getOtherData
    builder.addCase(getOtherData.fulfilled, (state, action) => {
      state.preloader = false;
      state.otherData = action.payload;
    });
    builder.addCase(getOtherData.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getOtherData.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getRoseSort
    builder.addCase(getRoseSort.fulfilled, (state, action) => {
      state.preloader = false;
      state.listSortRose = action.payload;
    });
    builder.addCase(getRoseSort.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getRoseSort.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getTopFlowers
    builder.addCase(getTopFlowers.fulfilled, (state, action) => {
      state.preloader = false;
      state.morelist = action.payload;
    });
    builder.addCase(getTopFlowers.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getTopFlowers.pending, (state, action) => {
      state.preloader = true;
    });
    //////////////// getEveryData
    builder.addCase(getEveryData.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyFlowers = action.payload;
    });
    builder.addCase(getEveryData.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getEveryData.pending, (state, action) => {
      state.preloader = true;
    });
  },
  reducers: {},
});
export const { changeTypeSecretarDela } = requestSlice.actions;

export default requestSlice.reducer;
