import {configureStore} from '@reduxjs/toolkit'
import mealReducer from '../fetures/meal/mealSlice'
import authReducer from '../fetures/auth/authSlice'

export const store = configureStore({
  reducer: {
    meal: mealReducer,
  }
})
