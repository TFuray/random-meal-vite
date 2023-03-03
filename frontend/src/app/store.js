import {configureStore} from '@reduxjs/toolkit'
import mealReducer from '../features/meal/mealSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    auth: authReducer
  }
})
