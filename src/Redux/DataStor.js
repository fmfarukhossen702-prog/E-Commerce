import { createSlice } from "@reduxjs/toolkit";

export const DataStor = createSlice({
  name: "dataStor",
  initialState: {
    products: [],
    category: [],
    filteredProducts: [],
    loding: true,

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


    // from valid
    // emailReducer: (state, action) => {
    //   state.form.email = action.payload;
    // },
    // emailErrorReducer: (state, action) => {
    //   state.form.emailError = action.payload;
    // },
    // passwordReducer: (state, action) => {
    //   state.form.password = action.payload;
    // },
    // passwordErrorReducer: (state, action) => {
    //   state.form.passwordError = action.payload;
    // },
    // // logic fuction
    // logicValidation: (state) => {

    //   const email = state.form.email.trim();
    //   const password = state.form.password.trim();

    //   state.form.emailError = "";
    //   state.form.passwordError = "";

    //   if(!email){
    //     state.form.emailError = "Please enter your Email.";
    //   } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    //     state.form.emailError = "Enter a valid Email."
    //   }
    //   if(!password){
    //     state.form.passwordError = "Please enter your password"
    //   }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)){
    //     state.form.passwordError = "Enter a valid Password "
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  productReducer,
  categoryReducer,
  filteredProductsReducer,
  lodingReducer,
  // emailReducer,
  // emailErrorReducer,
  // passwordReducer,
  // passwordErrorReducer,
  // logicValidation,
} = DataStor.actions;

export default DataStor.reducer;
