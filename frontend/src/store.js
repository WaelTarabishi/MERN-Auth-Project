import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./Slices/authSlice";
import { apiSlice } from "./Slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export default store;
