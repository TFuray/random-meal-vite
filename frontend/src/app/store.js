import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apiSlice } from "../features/apiSlice"
import authReducer from "../features/auth/authSlice"
import bbcReducer from "../features/bbc/bbcSlice"
import mealReducer from "../features/meal/mealSlice"

const store = configureStore({
  reducer: {
    meal: mealReducer,
    auth: authReducer,
    bbc: bbcReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
