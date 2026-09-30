import { createSlice } from "@reduxjs/toolkit";

export const DataStor = createSlice({
  name: "dataStor",
  initialState: {
    products: [],
    category: [],
    filteredProducts: [],
    loding: true,
    card: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] ,

    // form valid
    // form: {
    //   email: "",
    //   emailError: "",
    //   password: "",
    //   passwordError: "",
    // },
    // from valid end 

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
    },
    lodingReducer: (state, action) => {
      state.loding = action.payload;
    },
    cardReducer: (state, action) => {

      const ifExists = state.card.find((item) => item.id === action.payload.id);
      if (!ifExists) {
        state.card = [action.payload , ...state.card];
        localStorage.setItem("cart", JSON.stringify([...state.card]))
      }
    },
    removeReducer: (state, action) => {
      
     state.card = state.card.filter((item) => item.id !== action.payload)
             localStorage.setItem("cart", JSON.stringify([...state.card]));

      },


    
  },
});

// Action creators are generated for each case reducer function
export const {
  productReducer,
  categoryReducer,
  filteredProductsReducer,
  lodingReducer,
  cardReducer,
  removeReducer,
} = DataStor.actions;

export default DataStor.reducer;
