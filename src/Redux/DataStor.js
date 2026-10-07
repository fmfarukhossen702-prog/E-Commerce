import { createSlice } from "@reduxjs/toolkit";

export const DataStor = createSlice({
  name: "dataStor",
  initialState: {
    products: [],
    category: [],
    filteredProducts: [],
    loding: true,
    card: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    wishlist: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],

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
        state.card = [action.payload, ...state.card];
        localStorage.setItem("cart", JSON.stringify([...state.card]));
      }
    },
    removeReducer: (state, action) => {

      state.card = state.card.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify([...state.card]));
    },
    wishlistReducer: (state, action) => {
      const ifExists = state.wishlist.find(
        (item) => item.id === action.payload.id,
      );
      if (!ifExists) {
        state.wishlist = [action.payload, ...state.wishlist];
        localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
      }
    },
    removeWishlistReducer: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
    },
    incrementReducer: (state, action) => {
      
      state.card = state.card.map((item) =>
        item.id === action.payload
          ? { ...item, qunt: Number(item.qunt || 0) + 1 }
          : item,
      );
      localStorage.setItem("cart", JSON.stringify(state.card));
    },
    decrementReducer: (state, action) => {
          state.card = state.card.map((item) =>
            item.id === action.payload
              ? { ...item, qunt: Math.max(1, Number(item.qunt || 1) -1)}
              : item,
          );
          localStorage.setItem("cart", JSON.stringify(state.card));
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
  incrementReducer,
  decrementReducer,
  wishlistReducer,
  removeWishlistReducer,
} = DataStor.actions;

export default DataStor.reducer;
