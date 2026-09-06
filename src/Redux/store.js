import { configureStore } from "@reduxjs/toolkit";
import { DataStor } from "./DataStor";

export default configureStore({
  reducer: {
    dataStor : DataStor.reducer,
  },
});
