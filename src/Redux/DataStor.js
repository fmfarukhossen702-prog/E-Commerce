import { createSlice } from "@reduxjs/toolkit";

export const DataStor = createSlice({
  name: "dataStor",
  initialState: {
    products: [],
    category: [],
    filteredProducts: [],

  },
  reducers: {
    productReducer: (state, action) => {
      state.products = action.payload;
    },
    categoryReducer: (state, action) => {
      state.category = action.payload;
    },
    filteredProductsReducer: (state, action) => {
      state.filteredProducts = action.payload;
    }

  },
});

// Action creators are generated for each case reducer function
export const { productReducer, categoryReducer, filteredProductsReducer } = DataStor.actions;

export default DataStor.reducer;
