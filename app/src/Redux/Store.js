import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./Slices/FoodSlice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});
