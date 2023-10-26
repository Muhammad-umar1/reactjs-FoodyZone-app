import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../../assets/BaseUrl";

const initialState = {
  data: [],
  searchCategory: "",
  isLoading: false,
  isError: false,
};

export const fetchFoodData = createAsyncThunk(
  "food/api",
  async (rejectWithValue) => {
    try {
      const response = await axios.get(BaseUrl);
      console.log(response?.data);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {
    searchFood: (state, action) => {
      state.searchCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchFoodData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchFoodData.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default foodSlice.reducer;
export const { searchFood } = foodSlice.actions;
