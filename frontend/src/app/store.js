import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import mealReducer from "../features/meal/mealSlice"

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    auth: authReducer,
  },
})
